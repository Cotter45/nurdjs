'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
   await queryInterface.bulkInsert('Cocktails', [
      {
        name: 'Vesper',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Lemon twist',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Bacardi',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Olive',
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Negroni',
        glass: 'old-fashioned',
        category: 'Before Dinner Cocktail',
        garnish: 'Half an orange slice',
        preparation: 'Build into old-fashioned glass filled with ice. Stir gently.'
      },
      {
        name: 'Rose',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Rose Petal or lemon twist',
        preparation: 'Stir all ingredients with ice and strain into a cocktail glass.'
      },
      {
        name: 'Old Fashioned',
        glass: 'old-fashioned',
        category: 'Before Dinner Cocktail',
        garnish: 'Orange slice and cherry',
        preparation: 'Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whisky.'
      },
      {
        name: 'Tuxedo',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Cherry and lemon twist',
        preparation: 'Stir all ingredients with ice and strain into cocktail glass.'
      },
      {
        name: 'Mojito',
        glass: 'collins',
        category: 'Longdrink',
        garnish: 'Mint leaves and lemon slice',
        preparation: 'Muddle mint sprigs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Serve with straw.'
      },
      {
        name: "Horse's Neck",
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lemon twist',
        preparation: 'Build into highball glass with ice cubes. Stir gently. If required, add dashes of Angostura bitters.'
      },
      {
        name: "Planter's Punch",
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Pineapple slice and a cherry',
        preparation: 'Pour all ingredients, except the bitters, into shaker filled with ice. Shake. Pour into large glass, filled with ice. Add Angostura bitters, “on top”.'
      },
      {
        name: 'Sea Breeze',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lime wedge',
        preparation: 'Build all ingredients in a rock glass filled with ice.'
      },
      {
        name: 'Pisco Sour',
        glass: 'old-fashioned',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.'
      },
      {
        name: 'Long Island Iced Tea',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lemon twist',
        preparation: 'Add all ingredients into highball glass filled with ice. Stir gently. Serve with straw.'
      },
      {
        name: 'Clover Club',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Raspberry',
        preparation: 'Shake with ice cubes. Strain into cocktail glass.'
      },
      {
        name: 'Angel Face',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into a cocktail glass.'
      },
      {
        name: 'Mimosa',
        glass: 'champagne-flute',
        category: 'Sparkling Cocktail',
        garnish: 'Optional orange twist',
        preparation: "Pour orange juice into flute and gently pour Champagne. Stir gently. Note: Buck's Fizz is a very similar cocktail but made of two parts champagne to one part orange juice."
      },
      {
        name: 'Whiskey Sour',
        glass: 'old-fashioned',
        category: 'Before Dinner Cocktail',
        garnish: 'Half an orange slice and cherry',
        preparation: 'Dash egg white (Optional: if used shake little harder to foam up the egg white). Pour all ingredients into cocktail shaker filled with ice. Shake. Strain into cocktail glass. If served ‘On the rocks’, strain ingredients into old-fashioned glass filled with ice.'
      },
      {
        name: 'Screwdriver',
        glass: 'highball',
        category: 'All Day Cocktail',
        garnish: 'Orange slice',
        preparation: 'Build into a highball glass filled with ice. Stir gently.'
      },
      {
        name: 'Cuba Libre',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lime wedge',
        preparation: 'Build all ingredients in a highball glass filled with ice.'
      },
      {
        name: 'Manhattan',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Cherry',
        preparation: 'Stir in mixing glass with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Porto Flip',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.'
      },
      {
        name: 'Gin Fizz',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lemon slice',
        preparation: 'Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water.'
      },
      {
        name: 'Espresso Martini',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Margarita',
        glass: 'margarita',
        category: 'All Day Cocktail',
        garnish: "Lime",
        preparation: 'Shake with ice cubes. Strain into cocktail glass rimmed with salt (note:Fruit Margarita - blend selected fruit with the above recipe).'
      },
      {
        name: 'French 75',
        glass: 'champagne-tulip',
        category: 'Sparkling Cocktail',
        garnish: 'Lemon twist',
        preparation: 'Shake with ice cubes, except for champagne. Strain into a champagne flute. Top up with champagne. Stir gently.'
      },
      {
        name: 'Yellow Bird',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Cherry',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Pina Colada',
        glass: 'hurricane',
        category: 'Longdrink',
        garnish: 'Pineapple slice and a cherry',
        preparation: 'Blend all the ingredients with ice in a electric blender, pour into a large goblet or Hurricane glass and serve with straws.'
      },
      {
        name: 'Aviation',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Brandied cherry',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Bellini',
        glass: 'champagne-flute',
        category: 'Sparkling Cocktail',
        garnish: 'None',
        preparation: 'Pour peach puree into chilled glass and add sparkling wine. Stir gently. Variations: Puccini (fresh mandarin juice), Rossini (fresh strawberry puree), Tintoretto (fresh pomegranate juice)'
      },
      {
        name: 'Grasshopper',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: "None",
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Tequila Sunrise',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Orange slice and a cherry',
        preparation: 'Build tequila and orange juice into highball with ice cubes. Add a splash of grenadine to create sunrise effect. Do not stir.'
      },
      {
        name: 'Daiquiri',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Lime',
        preparation: 'Shake and strain into a cocktail glass.'
      },
      {
        name: 'Rusty Nail',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'Lemon twist',
        preparation: 'Build into old-fashioned glass filled with ice. Stir gently.'
      },
      {
        name: 'B52',
        glass: 'shot',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Layer ingredients one at a time starting with Kahlúa, followed by Baileys Irish Cream and top with Grand Marnier. Flame the Grand Marnier, serve while the flame is still on, accompanied with a straw on side plate.'
      },
      {
        name: 'Stinger',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Stir in mixing glass with ice cubes. Strain into a cocktail glass.'
      },
      {
        name: 'Golden Dream',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'God Mother',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Build into old fashioned glass filled with ice cubes. Stir gently.'
      },
      {
        name: 'Spritz Veneziano',
        glass: 'old-fashioned',
        category: 'Sparkling Cocktail',
        garnish: 'Half an orange slice',
        preparation: 'Build into an old-fashioned glass filled with ice. Top with a splash of soda water.'
      },
      {
        name: 'Bramble',
        glass: 'old-fashioned',
        category: 'All Day Cocktail',
        garnish: 'Lemon slice and two blackberries',
        preparation: 'Build over crushed ice, in a rock glass. Stir, then pour the blackberry liqueur over the top of the drink in a circular fashion.'
      },
      {
        name: 'Alexander',
        glass: 'martini',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into a chilled cocktail glass. Sprinkle with fresh ground nutmeg.'
      },
      {
        name: 'Lemon Drop Martini',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Lemon slice',
        preparation: 'Shake and strain into a chilled cocktail glass rimmed with sugar.'
      },
      {
        name: 'French Martini',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Raspberry',
        preparation: 'Stir in mixing glass with ice cubes. Strain into chilled cocktail glass. Squeeze oil from lemon peel onto the drink.'
      },
      {
        name: 'Black Russian',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Build into old fashioned glass filled with ice cubes. Stir gently. Note: for White Russian, float fresh cream on the top and stir gently.'
      },
      {
        name: 'Bloody Mary',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Celery and optionally lemon wedge',
        preparation: 'Stir gently, pour all ingredients into highball glass.'
      },
      {
        name: 'Mai-tai',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Pineapple spear, mint leaves and lime wedge',
        preparation: 'Shake and strain into highball glass. Serve with straw.'
      },
      {
        name: 'Barracuda',
        glass: 'margarita',
        category: 'Sparkling Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into chilled glass or pineapple mug.'
      },
      {
        name: 'Sex on the Beach',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Orange slice',
        preparation: 'Build all ingredients in a highball glass filled with ice.'
      },
      {
        name: 'Monkey Gland',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Orange slice',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Derby',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Mint leaves',
        preparation: 'Stir in mixing glass with ice cubes. Strain into a cocktail glass.'
      },
      {
        name: 'Sidecar',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Orange slice',
        preparation: 'Shake with ice cubes. Strain into cocktail glass.'
      },
      {
        name: 'Irish Coffee',
        glass: 'hot-drink',
        category: 'Hot Drink',
        garnish: 'None',
        preparation: 'Warm the Irish whiskey over a burner. Pour into the glass (for hot drink) hot coffee, and add a teaspoon of sugar. Float Cream on top.'
      },
      {
        name: 'Sazerac',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'Lemon twist',
        preparation: 'Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.'
      },
      {
        name: 'Americano',
        glass: 'old-fashioned',
        category: 'Before Dinner Cocktail',
        garnish: 'Half an orange slice',
        preparation: 'Build into old fashioned glass filled with ice cubes. Add a splash of soda water.'
      },
      {
        name: 'Singapore Sling',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Pineapple slice and a cherry',
        preparation: 'Shake with ice cubes. Strain into highball glass.'
      },
      {
        name: 'French Connection',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Build into old fashioned glass filled with ice cubes. Stir gently.'
      },
      {
        name: 'Moscow Mule',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lime slice',
        preparation: 'Combine the vodka and ginger beer. Add lime juice.'
      },
      {
        name: 'John Collins',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lemon slice and a cherry',
        preparation: 'Build into highball glass filled with ice. Stir gently. Add a dash of Angostura bitters. (Note: Use Old Tom Gin for Tom Collins)'
      },
      {
        name: 'Kir',
        glass: 'white-wine',
        category: 'Before Dinner Cocktail',
        garnish: 'None',
        preparation: 'Pour Créme de Cassis into glass, top up with white wine. For Kir Royal: Use champagne instead of white wine.'
      },
      {
        name: 'Mint Julep',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Mint sprig',
        preparation: 'In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is frost.'
      },
      {
        name: "Tommy's Margarita",
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'Paradise',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Dirty Martini',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Green olive',
        preparation: 'Stir in mixing glass with ice cubes. Strain into chilled martini glass.'
      },
      {
        name: 'Champagne Cocktail',
        glass: 'champagne-flute',
        category: 'Sparkling Cocktail',
        garnish: 'Orange slice and a cherry',
        preparation: 'Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by pouring gently chilled champagne.'
      },
      {
        name: 'Mary Pickford',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake and strain into a chilled large cocktail glass.'
      },
      {
        name: 'Hemingway Special',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into a double cocktail glass.'
      },
      {
        name: "Dark 'n' Stormy",
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'Lime wedge',
        preparation: 'Build into highball glass filled with ice. Add rum first and top it with ginger beer.'
      },
      {
        name: 'Ramos Fizz',
        glass: 'highball',
        category: 'Longdrink',
        garnish: 'None',
        preparation: 'Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.'
      },
      {
        name: 'Russian Spring Punch',
        glass: 'highball',
        category: 'Sparkling Cocktail',
        garnish: 'Lemon slice and a blackberry',
        preparation: 'Shake the ingredients and pour into highball glass. Top with Sparkling wine.'
      },
      {
        name: 'God Father',
        glass: 'old-fashioned',
        category: 'After Dinner Cocktail',
        garnish: 'None',
        preparation: 'Build into old fashioned glass filled with ice cubes. Stir gently.'
      },
      {
        name: 'Cosmopolitan',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Lime slice',
        preparation: 'Shake with ice cubes. Strain into a large cocktail glass.'
      },
      {
        name: 'Dry Martini',
        glass: 'martini',
        category: 'Before Dinner Cocktail',
        garnish: 'Olive',
        preparation: 'Stir in mixing glass with ice cubes. Strain into chilled martini glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.'
      },
      {
        name: 'Between the Sheets',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Casino',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Lemon twist and a cherry',
        preparation: 'Shake with ice cubes. Strain into chilled cocktail glass.'
      },
      {
        name: 'Caipirinha',
        glass: 'old-fashioned',
        category: 'All Day Cocktail',
        garnish: 'Lime',
        preparation: 'Place lime and sugar in old fashion glass and muddle. Fill glass with ice and Cachaca (note:Caipiroska- use Vodka instead of Cachaca).'
      },
      {
        name: 'Vampiro',
        glass: 'highball',
        category: 'Orange slice',
        garnish: 'Lime wedge and a green or red chili',
        preparation: 'Shake with ice cubes. Strain into a highball glass, filled with ice.'
      },
      {
        name: 'Kamikaze',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'Lime',
        preparation: 'Shake and strain into a chilled cocktail glass.'
      },
      {
        name: 'White Lady',
        glass: 'martini',
        category: 'All Day Cocktail',
        garnish: 'None',
        preparation: 'Shake with ice cubes. Strain into large cocktail glass.'
      },
      {
        name: 'Harvey Wallbanger',
        glass: 'highball',
        category: 'All Day Cocktail',
        garnish: 'Orance slice and a cherry',
        preparation: 'Build vodka and orange juice into a highball glass filled with ice. Stir gently and float Galliano on top.'
      }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Cocktails', null, {});
  }
};
