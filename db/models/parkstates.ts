'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class ParkStates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  ParkStates.init({
    park_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ParkStates',
  });
  return ParkStates;
};