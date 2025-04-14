/**
 * Author: Dagmawi Megra
 * Date: 04/13/2025
 * File Name: index.js
 * Description: The Taco stand app CLI program
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log("Taco stand serves: " + customer);
});

tacoStand.on("prepare", (taco) => {
  console.log("Taco Stand prepares: " + taco + " taco");
});
tacoStand.on("rush", (rush) => {
  console.log("Taco Stand handles rush: " + rush);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  // TODO: Handle the commands
  if (command === "serve") {
    tacoStand.serveCustomer(args[0]);
  }

  if (command === "prepare") {
    tacoStand.prepareTaco(args[0]);
  }

  if (command === "rush") {
    tacoStand.handleRush(args[0]);
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
