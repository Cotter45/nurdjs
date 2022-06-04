'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class CocktailPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      CocktailPicture.belongsTo(models.Cocktail, { foreignKey: 'cocktail_id' });
    }
  }
  CocktailPicture.init({
    cocktail_id: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CocktailPicture',
  });
  return CocktailPicture;
};