'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class ParkPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
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