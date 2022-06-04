'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      const mapper = {
        through: 'Cocktail_Ingredient',
        foreignKey: 'cocktail_id',
        otherKey: 'alcohol_id'
      }

      Cocktail.belongsToMany(models.Ingredient, mapper);
      Cocktail.hasMany(models.Cocktail_Ingredient, { foreignKey: 'cocktail_id' });
      Cocktail.hasMany(models.CocktailPicture, { foreignKey: 'cocktail_id' });
    }
  }
  Cocktail.init({
    name: DataTypes.STRING,
    glass: DataTypes.STRING,
    category: DataTypes.STRING,
    garnish: DataTypes.STRING,
    preparation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};