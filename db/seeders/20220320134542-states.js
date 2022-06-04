'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('States', [
    { state: 'Alaska' },
    { state: 'Alabama' },
    { state: 'Arkansas' },
    { state: 'American Samoa' },
    { state: 'Arizona' },
    { state: 'California' },
    { state: 'Colorado' },
    { state: 'Connecticut' },
    { state: 'District of Columbia' },
    { state: 'Delaware' },
    { state: 'Florida' },
    { state: 'Georgia' },
    { state: 'Guam' },
    { state: 'Hawaii' },
    { state: 'Iowa' },
    { state: 'Idaho' },
    { state: 'Illinois' },
    { state: 'Indiana' },
    { state: 'Kansas' },
    { state: 'Kentucky' },
    { state: 'Louisiana' },
    { state: 'Massachusetts' },
    { state: 'Maryland' },
    { state: 'Maine' },
    { state: 'Michigan' },
    { state: 'Minnesota' },
    { state: 'Missouri' },
    { state: 'Mississippi' },
    { state: 'Montana' },
    { state: 'North Carolina' },
    { state: 'North Dakota' },
    { state: 'Nebraska' },
    { state: 'New Hampshire' },
    { state: 'New Jersey' },
    { state: 'New Mexico' },
    { state: 'Nevada' },
    { state: 'New York' },
    { state: 'Ohio' },
    { state: 'Oklahoma' },
    { state: 'Oregon' },
    { state: 'Pennsylvania' },
    { state: 'Puerto Rico' },
    { state: 'Rhode Island' },
    { state: 'South Carolina' },
    { state: 'South Dakota' },
    { state: 'Tennessee' },
    { state: 'Texas' },
    { state: 'Utah' },
    { state: 'Virginia' },
    { state: 'Virgin Islands' },
    { state: 'Vermont' },
    { state: 'Washington' },
    { state: 'Wisconsin' },
    { state: 'West Virginia'},
    { state: 'Wyoming' }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('States', null, {});
  }
};
