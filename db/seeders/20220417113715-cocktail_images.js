'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('CocktailPictures', [
    { cocktail_id: 1, location: '/static/resized/vesper.png'},
    { cocktail_id: 2, location: '/static/resized/bacardi.png'},
    { cocktail_id: 3, location: '/static/resized/negroni.png'},
    { cocktail_id: 4, location: '/static/resized/rose.png'},
    { cocktail_id: 5, location: '/static/resized/old_fashioned.png'},
    { cocktail_id: 6, location: '/static/resized/tuxedo.png'},
    { cocktail_id: 7, location: '/static/resized/mojito.png'},
    { cocktail_id: 8, location: '/static/resized/horses_neck.png'},
    { cocktail_id: 9, location: '/static/resized/planters_punch.png'},
    { cocktail_id: 10, location: '/static/resized/sea_breeze.png'},
    { cocktail_id: 11, location: '/static/resized/pisco_sour.png'},
    { cocktail_id: 12, location: '/static/resized/long_island_iced_tea.png'},
    { cocktail_id: 13, location: '/static/resized/clover_club.png'},
    { cocktail_id: 14, location: '/static/resized/angel_face.png'},
    { cocktail_id: 15, location: '/static/resized/mimosa.png'},
    { cocktail_id: 16, location: '/static/resized/whiskey_sour.png'},
    { cocktail_id: 17, location: '/static/resized/screwdriver.png'},
    { cocktail_id: 18, location: '/static/resized/cuba_libre.png'},
    { cocktail_id: 19, location: '/static/resized/manhattan.png'},
    { cocktail_id: 20, location: '/static/resized/porto_flip.png'},
    { cocktail_id: 21, location: '/static/resized/gin_fizz.png'},
    { cocktail_id: 22, location: '/static/resized/espresso_martini.png'},
    { cocktail_id: 23, location: '/static/resized/margarita.png'},
    { cocktail_id: 24, location: '/static/resized/french_75.png'},
    { cocktail_id: 25, location: '/static/resized/yellow_bird.png'},
    { cocktail_id: 26, location: '/static/resized/pina_colada.png'},
    { cocktail_id: 27, location: '/static/resized/aviation.png'},
    { cocktail_id: 28, location: '/static/resized/bellini.png'},
    { cocktail_id: 29, location: '/static/resized/grasshopper.png'},
    { cocktail_id: 30, location: '/static/resized/tequila_sunrise.png'},
    { cocktail_id: 31, location: '/static/resized/daquiri.png'},
    { cocktail_id: 32, location: '/static/resized/rusty_nail.png'},
    { cocktail_id: 33, location: '/static/resized/b52.png'},
    { cocktail_id: 34, location: '/static/resized/stinger.png'},
    { cocktail_id: 35, location: '/static/resized/golden_dream.png'},
    { cocktail_id: 36, location: '/static/resized/god_mother.png'},
    { cocktail_id: 37, location: '/static/resized/spritz_veneziano.png'},
    { cocktail_id: 38, location: '/static/resized/bramble.png'},
    { cocktail_id: 39, location: '/static/resized/alexander.png'},
    { cocktail_id: 40, location: '/static/resized/lemon_drop.png'},
    { cocktail_id: 41, location: '/static/resized/french_martini.png'},
    { cocktail_id: 42, location: '/static/resized/black_russian.png'},
    { cocktail_id: 43, location: '/static/resized/bloody_mary.png'},
    { cocktail_id: 44, location: '/static/resized/mai-tai.png'},
    { cocktail_id: 45, location: '/static/resized/barracuda.png'},
    { cocktail_id: 46, location: '/static/resized/sex_on_the_beach.png'},
    { cocktail_id: 47, location: '/static/resized/monkey_gland.png'},
    { cocktail_id: 48, location: '/static/resized/derby.png'},
    { cocktail_id: 49, location: '/static/resized/sidecar.png'},
    { cocktail_id: 50, location: '/static/resized/irish_coffee.png'},
    { cocktail_id: 51, location: '/static/resized/sazerac.png'},
    { cocktail_id: 52, location: '/static/resized/americano.png'},
    { cocktail_id: 53, location: '/static/resized/singapore_sling.png'},
    { cocktail_id: 54, location: '/static/resized/french_connection.png'},
    { cocktail_id: 55, location: '/static/resized/moscow_mule.png'},
    { cocktail_id: 56, location: '/static/resized/john_collins.png'},
    { cocktail_id: 57, location: '/static/resized/kir.png'},
    { cocktail_id: 58, location: '/static/resized/mint_julep.png'},
    { cocktail_id: 59, location: '/static/resized/tommys_margarita.png'},
    { cocktail_id: 60, location: '/static/resized/paradise.png'},
    { cocktail_id: 61, location: '/static/resized/dirty_martini.png'},
    { cocktail_id: 62, location: '/static/resized/champagne_cocktail.png'},
    { cocktail_id: 63, location: '/static/resized/mary_pickford.png'},
    { cocktail_id: 64, location: '/static/resized/hemingway_special.png'},
    { cocktail_id: 65, location: '/static/resized/dark_n_stormy.png'},
    { cocktail_id: 66, location: '/static/resized/ramos_fizz.png'},
    { cocktail_id: 67, location: '/static/resized/russian_spring_punch.png'},
    { cocktail_id: 68, location: '/static/resized/god_father.png'},
    { cocktail_id: 69, location: '/static/resized/cosmopolitan.png'},
    { cocktail_id: 70, location: '/static/resized/dry_martini.png'},
    { cocktail_id: 71, location: '/static/resized/between_the_sheets.png'},
    { cocktail_id: 72, location: '/static/resized/casino.png'},
    { cocktail_id: 73, location: '/static/resized/caipirinha.png'},
    { cocktail_id: 74, location: '/static/resized/vampiro.png'},
    { cocktail_id: 75, location: '/static/resized/kamikaze.png'},
    { cocktail_id: 76, location: '/static/resized/white_lady.png'},
    { cocktail_id: 77, location: '/static/resized/harvey_wallbanger.png'},
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('CocktailPictures', null, {});
  }
};
