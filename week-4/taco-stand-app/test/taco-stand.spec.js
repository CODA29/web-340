/**
 * Author: Dagmawi Megra
 * Date: 04/13/2025
 * File Name: taco-stand.spec.js
 * Description: Taco stand app tester
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter;

// TODO: Write tests for the TacoStandEmitter methods

function testCustomerNameIsNonNumeric(){
  try{
    tacoStand.serveCustomer(30);
    return false;
  }catch(err){
    assert.strictEqual(err.message, "Customer name can not be a number, try again!")
    console.log(" ✅ Non numeric customer name test passed!")
    return true;
  }
}

function testTacoNameCanNotBeEmptyInput(){
  try{
    tacoStand.prepareTaco("");
    return false;
  }catch(err){
    assert.strictEqual(err.message, "Taco field can not be blank!");
    console.log(" ✅ Taco type test passed! ")
    return true;
  }
}

function testRushIsNotBoolean(){
  try{
    tacoStand.handleRush(true);
    return false;
  }catch(err){
    assert.strictEqual(err.message, "Rush only takes breakfast, lunch, or dinner values")
    console.log("✅ Rush Boolean Test passed ")
  }
}

// Call the testing functions
testCustomerNameIsNonNumeric();
testTacoNameCanNotBeEmptyInput();
testRushIsNotBoolean();