'use strict';
import { Model } from 'sequelize';

const bcrypt = require("bcryptjs");

type Login = {
  credential: string;
  password: string;
}

type SignUp = {
  username: string;
  password: string;
  email: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model {
    declare id: number;
    declare username: string;
    declare email: string;
    declare hashedPassword: string;

    toSafeObject() {
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    }
    validatePassword(password: string) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    static getCurrentUserById(id: number) {
      return User.scope("currentUser").findByPk(id);
    }
    static async login({ credential, password }: Login) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential,
          },
        },
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }
    static async signup({ username, email, password }: SignUp) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        email,
        hashedPassword,
      });
      return await User.scope('currentUser').findByPk(user.id);
    };
    static associate(models: any) {
      // define association here
    }
  };
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: { exclude: [] },
        },
      },
    }
  );
  return User;
};