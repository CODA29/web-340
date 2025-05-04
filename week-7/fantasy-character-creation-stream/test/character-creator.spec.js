"use strict";

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });


  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write('Warrior,Male,competes sword battles');
    characterCreator.end();

    let message = '';

    characterCreator.on('data', (chunk) => {
      message += chunk.toString().trim();
    });

    characterCreator.on('end', ()=>{
      expect(message).toBe("Your character is a Male Warrior who competes sword battles!");
      done();
    });

  });


  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) =>{
      expect(err.message).toBe("Input can not be empty, please provide a valid input!");
      done();
    });

    characterCreator.write("");
  });


  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const charClass = "Mage";
    const gender = "Female";
    const funFact = "loves magic tricks";

    const expectedOutput = `Your character is a ${gender} ${charClass} who ${funFact}!`;

    let message = '';

    characterCreator.write(`${charClass}, ${gender}, ${funFact}`);
    characterCreator.end();

    characterCreator.on('data', (chunk) =>{
      message += chunk.toString();
    });

    characterCreator.on('end', () =>{
      expect(message).toBe(expectedOutput);
      done();
    });

  });
  
});