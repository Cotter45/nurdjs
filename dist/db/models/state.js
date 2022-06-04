'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class State extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            const parkStates = {
                through: 'ParkStates',
                foreignKey: 'state_id',
                otherKey: 'park_id'
            };
            State.belongsToMany(models.Park, parkStates);
        }
    }
    State.init({
        state: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'State',
    });
    return State;
};
