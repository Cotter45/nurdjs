'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ParkPicture extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ParkPicture.belongsTo(models.Park, { foreignKey: 'park_id' });
        }
    }
    ParkPicture.init({
        park_id: DataTypes.INTEGER,
        location: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ParkPicture',
    });
    return ParkPicture;
};
