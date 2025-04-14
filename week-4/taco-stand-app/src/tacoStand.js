/**
 * Author: Dagmawi Megra
 * Date: 04/13/2025
 * File Name: taco-stand.js
 * Description: A TacoStandEmitter class module
 */
"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush

class TacoStandEmitter extends EventEmitter{
  constructor(){
    super();
  }
  serveCustomer(customer){
    if(typeof customer === "number"){
      throw new Error("Customer name can not be a number, try again!");
    }

    this.emit("serve", customer);

  }

  prepareTaco(taco){
    if(taco.trim() === ""){
      throw new Error("Taco field can not be blank!");
    }

    this.emit("prepare", taco);
  }

  handleRush(rush){
    if(typeof rush !== "string"){
      throw new Error ("Rush only takes breakfast, lunch, or dinner values");
    }
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;