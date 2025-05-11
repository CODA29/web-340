"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const {writeFile, readFile} = require('fs').promises;
const {join} = require("path");

const characterFile = join(__dirname, "character.txt");



async function createCharacter(character) {
  // TODO: Implement this function
  try{
    const characterObject = character.map(char => `class: ${char.class}\ngender: ${char.gender}\nfunFact: ${char.funFact}`).join('\n\n');
    await writeFile(characterFile, characterObject);
    console.log("Character written successfully!");
  }catch(err){
    console.error("Error writing to the file.", err);
    throw err;
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try{
    const character = await readFile(characterFile, "utf-8");
    // Split the raw text into blocks of characters
    const descriptions = character.trim().split('\n\n');

    // Create an array that will hold the character objects
    const charactersArray = [];

    // Loop through the splitted blocks of characters
    for (let desc of descriptions){
      const lines = desc.split('\n'); // Split each blocks into lines
      const characterObject = {}; // An object to hold each character

      // Loop through the lines and split them at the colon symbol
      for(let line of lines){
        const keyValue = line.split(':');
        const key = keyValue[0].trim();
        const value = keyValue[1].trim();
        characterObject[key] = value;
      }

      // Push the newly formatted character object to the characters array
      charactersArray.push(characterObject);
    }

    // Return array of characters 
    return charactersArray;

  }catch(err){
    console.error("Error reading the file:", err);
    throw err;
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises