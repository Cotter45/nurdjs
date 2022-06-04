'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      nps_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      visitors: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      world_heritage_site: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      acres: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      square_km: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_established: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parks');
  }
};