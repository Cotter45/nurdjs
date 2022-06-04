'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Cocktail_Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Cocktail_Ingredient.belongsTo(models.Cocktail, { foreignKey: 'cocktail_id' });
      Cocktail_Ingredient.belongsTo(models.Ingredient, { foreignKey: 'alcohol_id' });
    }
  }
  Cocktail_Ingredient.init({
    unit: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    ingredient: DataTypes.NUMBER,
    special: DataTypes.STRING,
    alcohol_id: DataTypes.INTEGER,
    cocktail_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cocktail_Ingredient',
  });
  return Cocktail_Ingredient;
};