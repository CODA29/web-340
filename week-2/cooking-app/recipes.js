/**
 * Author: Dagmawi Megra
 * Date: 03/27/2025
 * File Name: recipes.js
 * Description: A module containing functions for the recipe application
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  let recipe = "Recipe created with ingredients: "

  for(let i=0; i<ingredients.length; i++){

    if (ingredients.indexOf(ingredients[i]) === ingredients.length-1){
      recipe += ingredients[i];
    }else{
      recipe += ingredients[i] +", ";
    }
  }
  return recipe;
}


// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  let timer = "Timer set for " + minutes + " minutes"
  return timer;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  let msg = "Program exited";
  return msg;
}

// TODO: Export the functions
module.exports ={
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};