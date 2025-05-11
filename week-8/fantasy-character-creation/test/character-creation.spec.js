"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.spyOn(fs, 'readFile').mockImplementation(()=> Promise.resolve("class: Warrior\n gender: Male \nfunFact: Does wand magic"));
    jest.spyOn(fs, 'writeFile').mockImplementation(()=> Promise.resolve());
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file

  test("createCharacter writes a new character to the file", async() =>{
    const character = {class: "Warrior", gender: "Male", funFact: "Does wand magic"};
    await expect(createCharacter([character])).resolves.toBeUndefined();
  });

  // 2. Test that getCharacters reads characters from the file
  test("getCharacters reads characters from the file", async() =>{
    const character = await getCharacters();
    expect(character).toEqual([{class: "Warrior", gender: "Male", funFact: "Does wand magic"}]);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter handles errors when writing to the file", async() =>{
    fs.writeFile.mockImplementationOnce(()=> Promise.reject(new Error("Error writing to the file.")));
    const character = {class: "Mage", gender: "Female", funFact: "Does hair tricks"};
    await expect(createCharacter([character])).rejects.toThrow("Error writing to the file.");
  });
});