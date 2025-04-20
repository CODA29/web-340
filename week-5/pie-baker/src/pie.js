/**
 * Author: Dagmawi Megra
 * Date: 04/20/2025
 * File Name: pie.js
 * Description:  This file contains a function that bakes a pie.
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];

  // Filter the missing items from the user provided ingredients
  const missingIngredient = essentialIngredients.filter(item => !ingredients.includes(item));

  // Check the newly filtered array contains any item
  if(missingIngredient.length > 0){
    console.warn("❌ Missing essential ingredient! Must include flour, sugar, and butter");
    process.exit(1);
  }

  // Check if pie type is not provided
  if(pieType.trim() === ""){
    console.warn("❌ Pie type must be provided.");
    process.exit(1);
  }

  console.log(`Hooray 🎉 your ${pieType} pie is successfully baked!`);

}

module.exports = { bakePie };