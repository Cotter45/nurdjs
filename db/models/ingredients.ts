'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      const mapper = {
        through: 'Cocktail_Ingredient',
        foreignKey: 'alcohol_id',
        otherKey: 'cocktail_id'
      }

      Ingredient.belongsToMany(models.Cocktail, mapper);
      Ingredient.hasMany(models.Cocktail_Ingredient, { foreignKey: 'alcohol_id' });
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    abv: DataTypes.NUMBER,
    taste: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};