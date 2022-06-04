'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('ParkStates', [
     { park_id: 1, state_id: 24 },
     { park_id: 2, state_id: 4 },
     { park_id: 3, state_id: 48 },
     { park_id: 4, state_id: 45 },
     { park_id: 5, state_id: 47 },
     { park_id: 6, state_id: 11 },
     { park_id: 7, state_id: 7 },
     { park_id: 8, state_id: 48 },
     { park_id: 9, state_id: 48 },
     { park_id: 10, state_id: 48 },
     { park_id: 11, state_id: 35 },
     { park_id: 12, state_id: 6 },
     { park_id: 13, state_id: 44 },
     { park_id: 14, state_id: 40 },
     { park_id: 15, state_id: 38 },
     { park_id: 16, state_id: 6 },
     { park_id: 16, state_id: 36 },
     { park_id: 17, state_id: 1 },
     { park_id: 18, state_id: 11 },
     { park_id: 19, state_id: 11 },
     { park_id: 20, state_id: 1 },
     { park_id: 21, state_id: 29 },
     { park_id: 22, state_id: 1 },
     { park_id: 23, state_id: 5 },
     { park_id: 24, state_id: 55 },
     { park_id: 25, state_id: 36 },
     { park_id: 26, state_id: 7 },
     { park_id: 27, state_id: 46 },
     { park_id: 27, state_id: 30 },
     { park_id: 28, state_id: 47 },
     { park_id: 29, state_id: 14 },
     { park_id: 30, state_id: 14 },
     { park_id: 31, state_id: 3 },
     { park_id: 32, state_id: 25 },
     { park_id: 33, state_id: 6 },
     { park_id: 34, state_id: 1 },
     { park_id: 35, state_id: 1 },
     { park_id: 36, state_id: 6 },
     { park_id: 37, state_id: 1 },
     { park_id: 38, state_id: 1 },
     { park_id: 39, state_id: 6 },
     { park_id: 40, state_id: 20 },
     { park_id: 41, state_id: 7 },
     { park_id: 42, state_id: 52 },
     { park_id: 43, state_id: 52 },
     { park_id: 44, state_id: 52 },
     { park_id: 45, state_id: 5 },
     { park_id: 46, state_id: 6 },
     { park_id: 47, state_id: 6 },
     { park_id: 48, state_id: 7 },
     { park_id: 49, state_id: 5 },
     { park_id: 50, state_id: 6 },
     { park_id: 51, state_id: 49 },
     { park_id: 52, state_id: 31 },
     { park_id: 53, state_id: 50 },
     { park_id: 54, state_id: 26 },
     { park_id: 55, state_id: 45 },
     { park_id: 56, state_id: 1 },
     { park_id: 57, state_id: 55 },
     { park_id: 57, state_id: 29 },
     { park_id: 57, state_id: 16 },
     { park_id: 58, state_id: 6 },
     { park_id: 59, state_id: 48 }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('ParkStates', null, {});
  }
};
