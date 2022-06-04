'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        toSafeObject() {
            const { id, username, email } = this; // context will be the User instance
            return { id, username, email };
        }
        validatePassword(password) {
            return bcrypt.compareSync(password, this.hashedPassword.toString());
        }
        static getCurrentUserById(id) {
            return User.scope("currentUser").findByPk(id);
        }
        static login({ credential, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                const { Op } = require('sequelize');
                const user = yield User.scope('loginUser').findOne({
                    where: {
                        [Op.or]: {
                            username: credential,
                            email: credential,
                        },
                    },
                });
                if (user && user.validatePassword(password)) {
                    return yield User.scope('currentUser').findByPk(user.id);
                }
            });
        }
        static signup({ username, email, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                const hashedPassword = bcrypt.hashSync(password);
                const user = yield User.create({
                    username,
                    email,
                    hashedPassword,
                });
                return yield User.scope('currentUser').findByPk(user.id);
            });
        }
        ;
        static associate(models) {
            // define association here
        }
    }
    ;
    User.init({
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
    }, {
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
    });
    return User;
};
