/**
 * Author: Dagmawi Megra
 * Date: 03/27/2025
 * File Name: index.js
 * Description: Entry file for the program
*/
// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes");



// TODO: Implement your CLI program here
function displayRecipes(){
  let soupIngredients = ["Beans", "Ham", "Lentils", "Broth"]; // testing array
  let recipe = createRecipe(soupIngredients);
  console.log(recipe);
}

// Main function for the program
function main(){
  console.log("\n----Displaying Recipe----")
  displayRecipes(); // call the displayRecipes function

  // displaying the setTimer function returned variable
  console.log("\n----Displaying the timer----")
  let timer = setTimer(45);
  console.log(timer);

  // Displaying the quit function returned variable
  let msg = quit();
  console.log("\n----Exiting the program----")
  console.log(msg)
}

main();