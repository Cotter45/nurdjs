'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cocktail_Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      ingredient: {
        type: Sequelize.STRING
      },
      special: {
        type: Sequelize.STRING,
      },
      alcohol_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Ingredients' }
      },
      cocktail_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Cocktails' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cocktail_Ingredients');
  }
};