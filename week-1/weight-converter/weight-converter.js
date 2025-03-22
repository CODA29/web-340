/**
 * Author: Dagmawi Megra
 * Date: 03/19/2025
 * File Name: weight-converter.js
 * Description: A simple weight converter
*/

"use strict";

// TODO: Implement the weight conversion logic here


/* Get the pounds value from the command line arguments,
which in this case the third argument */
const pounds = parseFloat(process.argv[2]);


/* Script to convert pounds to kilograms and
round result to two decimal places */
const kg = (pounds * 0.453592).toFixed(2);


// Check if the pounds value is not provided
if(process.argv.length != 3){
  console.error("stderr: Usage: node weight-converter.js <pounds>");
  process.exit(1);
}else if(isNaN(pounds)){ // Check if a non-numeric value is provided
  console.error('stderr: Input must be a number.');
  process.exit(1);
}else{
  // Show the converted result in the console
  console.log(kg);
}

