"use strict";
// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        {class: "Warrior", gender: "Male", funFact: "Loves Karate"}, {class: "Mage", gender: "Female", funFact: "Does hair magic"}, {class: "Rogue", gender: "Other", funFact: "Does wand magic"}
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((error, data) =>{
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("src/failing-script.js");
    gameCharacters.getCharacters((error, data) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});