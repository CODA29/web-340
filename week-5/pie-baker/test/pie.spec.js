/**
 * Author: Dagmawi Megra
 * Date: 04/20/2025
 * File Name: pie.spec.js
 * Description: jest test file for the bakePie function
 */

"use strict";

const { bakePie } = require("../src/pie");
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

// Your tests here
describe("bakePie", ()=>{
  let log;
  let warn;

  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockImplementation(() => {});
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
    warn.mockRestore();
  });

  // Test if any essential ingredient is missing
  test("an essential ingredient is missing ", () => {
    const pieType = "Cherry";
    const ingredients = ["cherry","flour","salt", "eggs"];
    bakePie(pieType, ingredients);
    expect(log).not.toHaveBeenCalledWith();
    expect(warn).toHaveBeenCalledWith("❌ Missing essential ingredient! Must include flour, sugar, and butter");
    expect(exit).toHaveBeenCalledWith(1);

  });

  // Test if the Pie type is not provided
  test("the pie type is provided", ()=>{
    const pieType = "";
    const ingredients = ["flour", "sugar", "butter"];
    bakePie(pieType, ingredients);
    expect(log).not.toHaveBeenCalledWith();
    expect(warn).toHaveBeenCalledWith("❌ Pie type must be provided.");
    expect(exit).toHaveBeenCalledWith(1);

  });

  /* Test the bakePie function return a message
    indicating the pie was successfully baked */
  test("bakePie returns a success message", ()=>{
    const pieType = "Blueberry";
    const ingredients = ["blueberry", "flour", "sugar", "butter"];
    bakePie(pieType, ingredients);
    expect(log).toHaveBeenCalledWith("Hooray 🎉 your Blueberry pie is successfully baked!");
    expect(warn).not.toHaveBeenCalledWith();
    expect(exit).not.toHaveBeenCalledWith();
  })
})
