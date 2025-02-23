// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiples = 0;
  _.each(numbers, function(number, index, numbers) {
    if (number % 5 === 0) {
      multiples++;
    }
  });
  return multiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var oneFruit = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return true;
    }
  });
  return oneFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var startingWith = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return true;
    }
  });
  return startingWith;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookies = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return true;
    }
  });
  return cookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = 0;
  sum = _.reduce(products, function(sum, product) {
    var price = parseFloat(product.price.substring(1));
    return sum + price;
  }, sum);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  // go through all the desserts and add each unique type to the dessert types
  var categories = {};
  _.each(desserts, function(dessertType, dessert, desserts) {
    if (!categories[dessertType]) {
      categories[dessertType] = 0;
    }
  });
  //for each type in dessert types, run _.reduce, procc'd if types match
  _.each(categories, function(dessertType, dessert, categories) {
    dessertType = _.reduce(desserts, function(dessertType) {
      if (dessertType === dessert.type) {
        return 1;
      }
    });
  });

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
