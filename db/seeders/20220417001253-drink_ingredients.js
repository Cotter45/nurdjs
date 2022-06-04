'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('Cocktail_Ingredients', [
    { unit: 'cl', amount: 6, ingredient: 'Gin', cocktail_id: 1, alcohol_id:25 },
    { unit: 'cl', amount: 1.5, ingredient: 'Vodka', cocktail_id: 1, alcohol_id:50 },
    { unit: 'cl', amount: 0.75, ingredient: 'Lillet Blonde', cocktail_id: 1, alcohol_id:32 },
    {
      unit: 'cl',
      amount: 4.5,
      ingredient: 'White rum',
      label: 'Bacardi White Rum', cocktail_id: 2, alcohol_id:52
    },
    { unit: 'cl', amount: 2, ingredient: 'Lime juice', cocktail_id: 2 },
    { unit: 'cl', amount: 1, ingredient: 'Syrup', label: 'Grenadine', cocktail_id: 2 },
    { unit: 'cl', amount: 3, ingredient: 'Gin', cocktail_id: 3, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Campari', cocktail_id: 3, alcohol_id:7 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Vermouth',
      label: 'Sweet red vermouth', cocktail_id: 3, alcohol_id:49
    },
    { unit: 'cl', amount: 2, ingredient: 'Kirsch', cocktail_id: 4,alcohol_id:30 },
    {
      unit: 'cl',
      amount: 4,
      ingredient: 'Vermouth',
      label: 'Dry vermouth', cocktail_id: 4, alcohol_id:49
    },
    { special: '3 dashes Strawberry syrup', cocktail_id: 4 },
    {
      unit: 'cl',
      amount: 4.5,
      ingredient: 'Whiskey',
      label: 'Bourbon or rye whiskey', cocktail_id: 5, alcohol_id:51
    },
    { special: '2 dashes Angostura Bitters', cocktail_id: 5 },
    { special: '1 sugar cube', cocktail_id: 5 },
    { special: 'Few dashes plain water', cocktail_id: 5 },
    { unit: 'cl', amount: 3, ingredient: 'Gin', label: 'Old Tom Gin', cocktail_id: 6, alcohol_id:25 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Vermouth',
      label: 'Dry vermouth', cocktail_id: 6, alcohol_id:49
    },
    { special: '1/2 bar spoon Maraschino', cocktail_id: 6 },
    { special: '1/4 bar spoon Absinthe', cocktail_id: 6, alcohol_id:1 },
    { special: '3 dashes Orange Bitters', cocktail_id: 6, alcohol_id:35 },
    {
      unit: 'cl',
      amount: 4,
      ingredient: 'White rum',
      label: 'White Cuban Rum', cocktail_id: 7, alcohol_id:52
    },
    { unit: 'cl', amount: 3, ingredient: 'Lime juice', cocktail_id: 7 },
    { special: '6 Mint sprigs', cocktail_id: 7 },
    { special: '2 teaspoons white sugar', cocktail_id: 7 },
    { special: 'Soda water', cocktail_id: 7 },
    { unit: 'cl', amount: 4, ingredient: 'Cognac', cocktail_id: 8, alcohol_id:12 },
    { unit: 'cl', amount: 12, ingredient: 'Ginger Ale', cocktail_id: 8 },
    { special: 'Dash of Angostura bitters (optional)', cocktail_id: 8 },
    { unit: 'cl', amount: 4.5, ingredient: 'Dark rum', cocktail_id: 9, alcohol_id:18 },
    { unit: 'cl', amount: 3.5, ingredient: 'Orange juice', cocktail_id: 9 },
    { unit: 'cl', amount: 3.5, ingredient: 'Pineapple juice', cocktail_id: 9 },
    { unit: 'cl', amount: 2, ingredient: 'Lemon juice', cocktail_id: 9 },
    { unit: 'cl', amount: 1, ingredient: 'Syrup', label: 'Grenadine', cocktail_id: 9 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id: 9
    },
    { special: '3 to 4 dashes Angostura bitters', cocktail_id: 9 },
    { unit: 'cl', amount: 4, ingredient: 'Vodka', cocktail_id: 10, alcohol_id:50 },
    { unit: 'cl', amount: 12, ingredient: 'Cranberry juice', cocktail_id: 10 },
    { unit: 'cl', amount: 3, ingredient: 'Grapefruit juice', cocktail_id: 10 },
    { unit: 'cl', amount: 4.5, ingredient: 'Pisco', cocktail_id:11, alcohol_id:40 },
    { unit: 'cl', amount: 3, ingredient: 'Lemon juice', cocktail_id:11 },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:11
    },
    { special: '1 raw egg white (small egg)', cocktail_id:11 },
    { unit: 'cl', amount: 1.5, ingredient: 'Tequila', cocktail_id:12, alcohol_id:46 },
    { unit: 'cl', amount: 1.5, ingredient: 'Vodka', cocktail_id:12, alcohol_id:50  },
    { unit: 'cl', amount: 1.5, ingredient: 'White rum', cocktail_id:12, alcohol_id:52 },
    { unit: 'cl', amount: 1.5, ingredient: 'Triple Sec', cocktail_id:12, alcohol_id:48 },
    { unit: 'cl', amount: 1.5, ingredient: 'Gin', cocktail_id:12, alcohol_id:25 },
    { unit: 'cl', amount: 2.5, ingredient: 'Lemon juice', cocktail_id:12 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Syrup',
      label: 'Gomme syrup', cocktail_id:12
    },
    { special: '1 dash of Cola', cocktail_id:12 },
    { unit: 'cl', amount: 4.5, ingredient: 'Gin', cocktail_id:13, alcohol_id:25 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Raspberry syrup', cocktail_id:13
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:13 },
    { special: 'Few drops of Egg White', cocktail_id:13 },
    { unit: 'cl', amount: 3, ingredient: 'Gin', cocktail_id:14, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Apricot brandy', cocktail_id:14, alcohol_id:3 },
    { unit: 'cl', amount: 3, ingredient: 'Calvados', cocktail_id:14, alcohol_id:6 },
    { unit: 'cl', amount: 7.5, ingredient: 'Champagne', cocktail_id:15, alcohol_id:8 },
    { unit: 'cl', amount: 7.5, ingredient: 'Orange juice', cocktail_id:15 },
    {
      unit: 'cl',
      amount: 4.5,
      ingredient: 'Whiskey',
      label: 'Bourbon whiskey', cocktail_id:16, alcohol_id:51
    },
    { unit: 'cl', amount: 3, ingredient: 'Lemon juice', cocktail_id:16 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:16
    },
    { unit: 'cl', amount: 5, ingredient: 'Vodka', cocktail_id:17, alcohol_id:50  },
    { unit: 'cl', amount: 10, ingredient: 'Orange juice', cocktail_id:17 },
    { unit: 'cl', amount: 5, ingredient: 'White rum', cocktail_id:18, alcohol_id:52 },
    { unit: 'cl', amount: 12, ingredient: 'Cola', cocktail_id:18 },
    { unit: 'cl', amount: 1, ingredient: 'Lime juice', cocktail_id:18 },
    {
      unit: 'cl',
      amount: 5,
      ingredient: 'Whiskey',
      label: 'Rye whiskey', cocktail_id:19, alcohol_id:51
    },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Vermouth',
      label: 'Red vermouth', cocktail_id:19, alcohol_id:49
    },
    { special: '1 dash Angostura Bitters', cocktail_id:19 },
    { unit: 'cl', amount: 1.5, ingredient: 'Cognac', cocktail_id:20, alcohol_id:12 },
    { unit: 'cl', amount: 4.5, ingredient: 'Red Port', cocktail_id:20, alcohol_id:43 },
    { unit: 'cl', amount: 1, ingredient: 'Egg yolk', cocktail_id:20 },
    { unit: 'cl', amount: 4.5, ingredient: 'Gin', cocktail_id:21, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Lemon juice', cocktail_id:21 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:21
    },
    { unit: 'cl', amount: 8, ingredient: 'Soda water', cocktail_id:21 },
    { unit: 'cl', amount: 5, ingredient: 'Vodka', cocktail_id:22, alcohol_id:50  },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Coffee liqueur',
      label: 'Kahlúa', cocktail_id:22, alcohol_id:11
    },
    {
      special: 'Sugar syrup (according to individual preference of sweetness)', cocktail_id:22
    },
    { special: '1 short strong Espresso', cocktail_id:22 },
    { unit: 'cl', amount: 3.5, ingredient: 'Tequila', cocktail_id:23, alcohol_id:46 },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Triple Sec',
      label: 'Cointreau', cocktail_id:23, alcohol_id:48
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:23 },
    { unit: 'cl', amount: 3, ingredient: 'Gin', cocktail_id:24, alcohol_id:25 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:24 },
    { special: '2 dashes Sugar syrup', cocktail_id:24 },
    { unit: 'cl', amount: 6, ingredient: 'Champagne', cocktail_id:24, alcohol_id:8 },
    { unit: 'cl', amount: 3, ingredient: 'White rum', cocktail_id:25, alcohol_id:52 },
    { unit: 'cl', amount: 1.5, ingredient: 'Galliano', cocktail_id:25, alcohol_id:24 },
    { unit: 'cl', amount: 1.5, ingredient: 'Triple Sec', cocktail_id:25, alcohol_id:48 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'White rum', cocktail_id:26, alcohol_id:52 },
    { unit: 'cl', amount: 9, ingredient: 'Pineapple juice', cocktail_id:26 },
    { unit: 'cl', amount: 3, ingredient: 'Coconut milk', cocktail_id:26 },
    { unit: 'cl', amount: 4.5, ingredient: 'Gin', cocktail_id:27, alcohol_id:25 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Cherry liqueur',
      label: 'Maraschino', cocktail_id:27, alcohol_id:9
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:27 },
    { unit: 'cl', amount: 10, ingredient: 'Prosecco', cocktail_id:28, alcohol_id: 41 },
    { unit: 'cl', amount: 5, ingredient: 'Peach puree', cocktail_id:28 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Créme liqueur',
      label: 'White Créme de Cacao', cocktail_id:29, alcohol_id:17
    },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Créme liqueur',
      label: 'Green Créme de Menthe', cocktail_id:29, alcohol_id:17
    },
    { unit: 'cl', amount: 3, ingredient: 'Cream', cocktail_id:29 },
    { unit: 'cl', amount: 4.5, ingredient: 'Tequila', cocktail_id:30, alcohol_id:46 },
    { unit: 'cl', amount: 9, ingredient: 'Orange juice', cocktail_id:30 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Grenadine', cocktail_id:30
    },
    { unit: 'cl', amount: 4.5, ingredient: 'White rum', cocktail_id:31, alcohol_id:52 },
    { unit: 'cl', amount: 2.5, ingredient: 'Lime juice', cocktail_id:31 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Simple syrup', cocktail_id:31
    },
    {
      unit: 'cl',
      amount: 4.5,
      ingredient: 'Whiskey',
      label: 'Scotch whisky', cocktail_id:32, alcohol_id:51
    },
    { unit: 'cl', amount: 2.5, ingredient: 'Drambuie', cocktail_id:32, alcohol_id:21 },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Coffee liqueur',
      label: 'Kahlúa', cocktail_id:33, alcohol_id:11
    },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Cream liqueur',
      label: 'Baileys Irish Cream', cocktail_id:33, alcohol_id:16
    },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Triple Sec',
      label: 'Grand Marnier', cocktail_id:33, alcohol_id:48
    },
    { unit: 'cl', amount: 5, ingredient: 'Cognac', cocktail_id:34, alcohol_id:12 },
    {
      unit: 'cl',
      amount: 2,
      ingredient: 'Créme liqueur',
      label: 'White Créme de Menthe', cocktail_id:34, alcohol_id:17
    },
    { unit: 'cl', amount: 2, ingredient: 'Galliano', cocktail_id:35, alcohol_id:24 },
    { unit: 'cl', amount: 2, ingredient: 'Triple Sec', cocktail_id:35, alcohol_id:48 },
    { unit: 'cl', amount: 2, ingredient: 'Orange juice', cocktail_id:35 },
    { unit: 'cl', amount: 1, ingredient: 'Cream', cocktail_id:35 },
    { unit: 'cl', amount: 3.5, ingredient: 'Vodka', cocktail_id:36, alcohol_id:50  },
    { unit: 'cl', amount: 3.5, ingredient: 'DiSaronno', cocktail_id:36, alcohol_id:19 },
    { unit: 'cl', amount: 6, ingredient: 'Prosecco', cocktail_id:37, alcohol_id: 41 },
    { unit: 'cl', amount: 4, ingredient: 'Aperol', cocktail_id:37, alcohol_id:2 },
    { special: 'Splash of Soda water', cocktail_id:37 },
    { unit: 'cl', amount: 4, ingredient: 'Gin', cocktail_id:38, alcohol_id:25 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:38 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:38
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Blackberry liqueur', cocktail_id:38, alcohol_id:4 },
    { unit: 'cl', amount: 3, ingredient: 'Cognac', cocktail_id:39, alcohol_id:12 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Créme liqueur',
      label: 'Brown Créme de Cacao', cocktail_id:39, alcohol_id:17
    },
    { unit: 'cl', amount: 3, ingredient: 'Cream', cocktail_id:39 },
    {
      unit: 'cl',
      amount: 2.5,
      ingredient: 'Vodka',
      label: 'Citron Vodka', cocktail_id:40, alcohol_id:50 
    },
    { unit: 'cl', amount: 2, ingredient: 'Triple Sec', cocktail_id:40, alcohol_id:48 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:40 },
    { unit: 'cl', amount: 4.5, ingredient: 'Vodka', cocktail_id:41, alcohol_id:50  },
    { unit: 'cl', amount: 1.5, ingredient: 'Raspberry liqueur', cocktail_id:41, alcohol_id:42 },
    { unit: 'cl', amount: 1.5, ingredient: 'Pineapple juice', cocktail_id:41 },
    { unit: 'cl', amount: 5, ingredient: 'Vodka', cocktail_id:42, alcohol_id:50  },
    { unit: 'cl', amount: 2, ingredient: 'Coffee liqueur', cocktail_id:42, alcohol_id:11 },
    { unit: 'cl', amount: 4.5, ingredient: 'Vodka', cocktail_id:43, alcohol_id:50  },
    { unit: 'cl', amount: 9, ingredient: 'Tomato juice', cocktail_id:43 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:43 },
    { special: '2 to 3 dashes of Worcestershire Sauce', cocktail_id:43 },
    { special: 'Tabasco', cocktail_id:43 },
    { special: 'Celery salt', cocktail_id:43 },
    { special: 'Pepper', cocktail_id:43 },
    { unit: 'cl', amount: 4, ingredient: 'White rum', cocktail_id:44, alcohol_id:52 },
    { unit: 'cl', amount: 2, ingredient: 'Dark rum', cocktail_id:44, alcohol_id:18 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Triple Sec',
      label: 'Orange Curaçao', cocktail_id:44, alcohol_id:48
    },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Orgeat syrup', cocktail_id:44
    },
    { unit: 'cl', amount: 1, ingredient: 'Lime juice', cocktail_id:44 },
    {
      unit: 'cl',
      amount: 4.5,
      ingredient: 'Dark rum',
      label: 'Gold rum', cocktail_id:45, alcohol_id:18
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Galliano', cocktail_id:45, alcohol_id:24 },
    { unit: 'cl', amount: 6, ingredient: 'Pineapple juice', cocktail_id:45 },
    { special: '1 dash Lime juice', cocktail_id:45 },
    { special: 'Top with Prosecco', cocktail_id:45, alcohol_id: 41 },
  
  
    { unit: 'cl', amount: 4, ingredient: 'Vodka', cocktail_id:46, alcohol_id:50  },
    { unit: 'cl', amount: 2, ingredient: 'Peach schnapps', cocktail_id:46, alcohol_id:38 },
    { unit: 'cl', amount: 4, ingredient: 'Cranberry juice', cocktail_id:46 },
    { unit: 'cl', amount: 4, ingredient: 'Orange juice', cocktail_id:46 },
    { unit: 'cl', amount: 5, ingredient: 'Gin', cocktail_id:47, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Orange juice', cocktail_id:47 },
    { special: '2 drops Absinthe', cocktail_id:47, alcohol_id:1 },
    { special: '2 drops Grenadine', cocktail_id:47 },
    { unit: 'cl', amount: 6, ingredient: 'Gin', cocktail_id:48, alcohol_id:25 },
    { special: '2 drops Peach Bitters', cocktail_id:48 },
    { special: '2 Fresh mint leaves', cocktail_id:48 },
    { unit: 'cl', amount: 5, ingredient: 'Cognac', cocktail_id:49, alcohol_id:12 },
    { unit: 'cl', amount: 2, ingredient: 'Triple Sec', cocktail_id:49, alcohol_id:48 },
    { unit: 'cl', amount: 2, ingredient: 'Lemon juice', cocktail_id:49 },
    {
      unit: 'cl',
      amount: 4,
      ingredient: 'Whiskey',
      label: 'Irish whiskey', cocktail_id:50, alcohol_id:51
    },
    { unit: 'cl', amount: 9, ingredient: 'Hot coffee', cocktail_id:50 },
    { unit: 'cl', amount: 3, ingredient: 'Cream', cocktail_id:50 },
    { special: '1 teaspoon of brown sugar', cocktail_id:50 },
    { unit: 'cl', amount: 5, ingredient: 'Cognac', cocktail_id:51, alcohol_id:12 },
    { unit: 'cl', amount: 1, ingredient: 'Absinthe', cocktail_id:51, alcohol_id:1 },
    { special: '1 sugar cube', cocktail_id:51 },
    { special: '2 dashes Peychaud’s bitters', cocktail_id:51 },
    { unit: 'cl', amount: 3, ingredient: 'Campari', cocktail_id:52, alcohol_id:7 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Vermouth',
      label: 'Red vermouth', cocktail_id:52, alcohol_id:49
    },
    { special: 'A splash of soda water', cocktail_id:52 },
    { unit: 'cl', amount: 3, ingredient: 'Gin', cocktail_id:53, alcohol_id:25 },
    { unit: 'cl', amount: 1.5, ingredient: 'Cherry liqueur', cocktail_id:53, alcohol_id:9 },
    {
      unit: 'cl',
      amount: 0.75,
      ingredient: 'Triple Sec',
      label: 'Cointreau', cocktail_id:53, alcohol_id:48
    },
    { unit: 'cl', amount: 0.75, ingredient: 'DOM Bénédictine', cocktail_id:53 },
    { unit: 'cl', amount: 12, ingredient: 'Pineapple juice', cocktail_id:53 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:53 },
    { unit: 'cl', amount: 1, ingredient: 'Syrup', label: 'Grenadine', cocktail_id:53 },
    { special: '1 dash Angostura bitters', cocktail_id:53 },
    { unit: 'cl', amount: 3.5, ingredient: 'Cognac', cocktail_id:54, alcohol_id:12 },
    { unit: 'cl', amount: 3.5, ingredient: 'DiSaronno', cocktail_id:54, alcohol_id:19 },
    { unit: 'cl', amount: 4.5, ingredient: 'Vodka', cocktail_id:55, alcohol_id:50  },
    { unit: 'cl', amount: 12, ingredient: 'Ginger beer', cocktail_id:55 },
    { unit: 'cl', amount: 0.5, ingredient: 'Lime juice', cocktail_id:55 },
    { special: '1 slice lime in a highball glass', cocktail_id:55 },
    { unit: 'cl', amount: 4.5, ingredient: 'Gin', cocktail_id:56, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Lemon juice', cocktail_id:56 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:56
    },
    { unit: 'cl', amount: 6, ingredient: 'Soda water', cocktail_id:56 },
    { unit: 'cl', amount: 9, ingredient: 'Dry White Wine', cocktail_id:57, alcohol_id:22 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Créme liqueur',
      label: 'Créme de Cassis', cocktail_id:57, alcohol_id:17
    },
    {
      unit: 'cl',
      amount: 6,
      ingredient: 'Whiskey',
      label: 'Bourbon whiskey', cocktail_id:58, alcohol_id:51
    },
    { special: '4 fresh mint sprigs', cocktail_id:58 },
    { special: '1 teaspoon powdered sugar', cocktail_id:58 },
    { special: '2 teaspoons water', cocktail_id:58 },
    { unit: 'cl', amount: 4.5, ingredient: 'Tequila', cocktail_id:59, alcohol_id:46 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:59 },
    { special: '2 bar spoons of Agave nectar', cocktail_id:59 },
    { unit: 'cl', amount: 3.5, ingredient: 'Gin', cocktail_id:60, alcohol_id:25 },
    { unit: 'cl', amount: 2, ingredient: 'Apricot brandy', cocktail_id:60, alcohol_id:3 },
    { unit: 'cl', amount: 1.5, ingredient: 'Orange juice', cocktail_id:60 },
    { unit: 'cl', amount: 6, ingredient: 'Vodka', cocktail_id:61, alcohol_id:50  },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Vermouth',
      label: 'Dry vermouth', cocktail_id:61, alcohol_id:49
    },
    { unit: 'cl', amount: 1, ingredient: 'Olive juice', cocktail_id:61 },
    { unit: 'cl', amount: 9, ingredient: 'Champagne', cocktail_id:62, alcohol_id:8 },
    { unit: 'cl', amount: 1, ingredient: 'Cognac', cocktail_id:62, alcohol_id:12 },
    { special: '2 dashes Angostura Bitters', cocktail_id:62 },
    { special: '1 sugar cube', cocktail_id:62 },
    { unit: 'cl', amount: 6, ingredient: 'White rum', cocktail_id:63, alcohol_id:52 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Cherry liqueur',
      label: 'Maraschino', cocktail_id:63, alcohol_id:9
    },
    { unit: 'cl', amount: 6, ingredient: 'Pineapple juice', cocktail_id:63 },
    { unit: 'cl', amount: 1, ingredient: 'Syrup', label: 'Grenadine', cocktail_id:63 },
    { unit: 'cl', amount: 6, ingredient: 'White rum', cocktail_id:64, alcohol_id:52 },
    { unit: 'cl', amount: 4, ingredient: 'Grapefruit juice', cocktail_id:64 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Cherry liqueur',
      label: 'Maraschino', cocktail_id:64, alcohol_id:9
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:64 },
    { unit: 'cl', amount: 6, ingredient: 'Dark rum', cocktail_id:65, alcohol_id:18 },
    { unit: 'cl', amount: 10, ingredient: 'Ginger beer', cocktail_id:65 },
    { unit: 'cl', amount: 4.5, ingredient: 'Gin', cocktail_id:66, alcohol_id:25 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:66 },
    { unit: 'cl', amount: 1.5, ingredient: 'Lemon juice', cocktail_id:66 },
    {
      unit: 'cl',
      amount: 3,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:66
    },
    { unit: 'cl', amount: 6, ingredient: 'Cream', cocktail_id:66 },
    { special: '1 Egg white', cocktail_id:66 },
    { special: '3 dashes Orange flower water', cocktail_id:66 },
    { special: '2 drops Vanilla extract', cocktail_id:66 },
    { special: 'Soda water', cocktail_id:66 },
    { unit: 'cl', amount: 2.5, ingredient: 'Vodka', cocktail_id:67, alcohol_id:50  },
    { unit: 'cl', amount: 2.5, ingredient: 'Lemon juice', cocktail_id:67 },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Créme liqueur',
      label: 'Créme de Cassis', cocktail_id:67, alcohol_id:17
    },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Syrup',
      label: 'Sugar syrup', cocktail_id:67
    },
    {
      unit: 'cl',
      amount: 3.5,
      ingredient: 'Whiskey',
      label: 'Scotch whisky', cocktail_id:68, alcohol_id:51
    },
    { unit: 'cl', amount: 3.5, ingredient: 'DiSaronno', cocktail_id:68, alcohol_id:19 },
    {
      unit: 'cl',
      amount: 4,
      ingredient: 'Vodka',
      label: 'Citron Vodka', cocktail_id:69, alcohol_id:50 
    },
    {
      unit: 'cl',
      amount: 1.5,
      ingredient: 'Triple Sec',
      label: 'Cointreau', cocktail_id:69, alcohol_id:48
    },
    { unit: 'cl', amount: 1.5, ingredient: 'Lime juice', cocktail_id:69 },
    { unit: 'cl', amount: 3, ingredient: 'Cranberry juice', cocktail_id:69 },
    { unit: 'cl', amount: 6, ingredient: 'Gin', cocktail_id:70, alcohol_id:25 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Vermouth',
      label: 'Dry vermouth', cocktail_id:70, alcohol_id:49
    },
    { unit: 'cl', amount: 3, ingredient: 'White rum', cocktail_id:70, alcohol_id:52 },
    { unit: 'cl', amount: 3, ingredient: 'Cognac', cocktail_id:70, alcohol_id:12 },
    { unit: 'cl', amount: 3, ingredient: 'Triple Sec', cocktail_id:70, alcohol_id:48 },
    { unit: 'cl', amount: 2, ingredient: 'Lemon juice', cocktail_id:70 },
    { unit: 'cl', amount: 4, ingredient: 'Gin', label: 'Old Tom Gin', cocktail_id:71, alcohol_id:25 },
    {
      unit: 'cl',
      amount: 1,
      ingredient: 'Cherry liqueur',
      label: 'Maraschino', cocktail_id:71, alcohol_id:9
    },
    { unit: 'cl', amount: 1, ingredient: 'Orange Bitters', cocktail_id:71 },
    { unit: 'cl', amount: 1, ingredient: 'Lemon juice', cocktail_id:71 },
    { unit: 'cl', amount: 5, ingredient: 'Cachaca', cocktail_id:72, alcohol_id:5 },
    { special: 'half fresh lime cut into 4 wedges', cocktail_id:72 },
    { special: '2 teaspoon sugar', cocktail_id:72 },
    {
      unit: 'cl',
      amount: 5,
      ingredient: 'Tequila',
      label: 'Silver Tequila', cocktail_id:73, alcohol_id:46
    },
    { unit: 'cl', amount: 7, ingredient: 'Tomato juice', cocktail_id:73 },
    { unit: 'cl', amount: 3, ingredient: 'Orange juice', cocktail_id:73 },
    { unit: 'cl', amount: 1, ingredient: 'Lime juice', cocktail_id:73 },
    { special: '1 teaspoon clear honey', cocktail_id:73 },
    { special: 'Half slice onion finely chopped', cocktail_id:73 },
    { special: 'Few slices fresh red hot chili peppers', cocktail_id:73 },
    { special: 'Few drops Worcestershire sauce', cocktail_id:73 },
    { special: 'Salt', cocktail_id:73 },
    { unit: 'cl', amount: 3, ingredient: 'Vodka', cocktail_id:74, alcohol_id:50  },
    { unit: 'cl', amount: 3, ingredient: 'Triple Sec', cocktail_id:74, alcohol_id:48 },
    { unit: 'cl', amount: 3, ingredient: 'Lime juice', cocktail_id:74 },
    { unit: 'cl', amount: 4, ingredient: 'Gin', cocktail_id:75, alcohol_id:25 },
    { unit: 'cl', amount: 3, ingredient: 'Triple Sec', cocktail_id:75, alcohol_id:48 },
    { unit: 'cl', amount: 2, ingredient: 'Lemon juice', cocktail_id:75 },
    { unit: 'cl', amount: 4.5, ingredient: 'Vodka', cocktail_id:76, alcohol_id:50  },
    { unit: 'cl', amount: 1.5, ingredient: 'Galliano', cocktail_id:76, alcohol_id:24 },
    { unit: 'cl', amount: 9, ingredient: 'Orange juice', cocktail_id:76 }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Cocktail_Ingredients', null, {});
  }
};
