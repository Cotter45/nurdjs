'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Park extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            const parkStates = {
                through: 'ParkStates',
                foreignKey: 'park_id',
                otherKey: 'state_id'
            };
            Park.hasMany(models.ParkPicture, { foreignKey: 'park_id' });
            Park.belongsToMany(models.State, parkStates);
        }
    }
    Park.init({
        description: DataTypes.TEXT,
        nps_link: DataTypes.STRING,
        title: DataTypes.STRING,
        uuid: DataTypes.STRING,
        visitors: DataTypes.INTEGER,
        world_heritage_site: DataTypes.BOOLEAN,
        location: DataTypes.STRING,
        acres: DataTypes.INTEGER,
        square_km: DataTypes.INTEGER,
        date_established: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Park',
    });
    return Park;
};
