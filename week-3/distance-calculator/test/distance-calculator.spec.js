"use strict";
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test if input is numeric
function testNumericInput(){
  try{
    assert.throws(()=> calculateDistance(3, "jupiter"), /Input can not be a number./);
    console.log(" ✅ Passed numeric input test!")
  }catch(err){
    console.error(`Failed testNumericInput: ${err.message}`);
  }
}

// Test function parameters are not case sensitive
function testParameterNotCaseSensitive(){
  try{
    assert.strictEqual(calculateDistance("jupiter", "MERCURY"), 4.81);
    console.log("✅ Passed parameters are not case sensitive test!");
    return true;
  }catch(err){
    console.error(`Failed testParameterNotCaseSensitive: ${err.message}`);
    return false;
  }
}

// Test the function accepts only existing planet names
function testOnlyAcceptsValidPlanetNames() {
  // TODO: Implement this function
  try{
    assert.throws(()=>calculateDistance("Dog", "Cat"), /One or both of the inputs are invalid planet names./);
    console.log(" ✅ Passed valid planet names test!");
    return true;
  }catch(err){
    console.error(`Failed testOnlyAcceptsValidPlanetNames: ${err.message}`);
    return false;
  }

}

// Call your test functions here
testNumericInput()
testParameterNotCaseSensitive();
testOnlyAcceptsValidPlanetNames();

