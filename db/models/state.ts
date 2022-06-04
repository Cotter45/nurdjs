'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      const parkStates = {
        through: 'ParkStates',
        foreignKey: 'state_id',
        otherKey: 'park_id'
      }

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