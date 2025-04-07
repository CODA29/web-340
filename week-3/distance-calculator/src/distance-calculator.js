"use strict";
function calculateDistance(planet1, planet2) {
  // TODO: Implement this function

  const PLANETS = {
    mars: 1.52,
    jupiter: 5.20,
    venus: 0.72,
    saturn: 9.58,
    uranus: 19.18,
    mercury: 0.39,
    earth: 1.00,
    neptune: 30.07
  };

  let distance;

  if(typeof planet1 === "number" || typeof planet2 === "number"){
    throw Error("Input can not be a number.")
  }

  const planetOne = planet1.trim().toLowerCase();
  const planetTwo = planet2.trim().toLowerCase();

  if(!(planetOne in PLANETS) || !(planetTwo in PLANETS)){
    throw Error("One or both of the inputs are invalid planet names.");
  }

  distance = Math.abs(PLANETS[planetOne] - PLANETS[planetTwo]);
  distance = parseFloat(distance.toFixed(2));
  return distance;

}

module.exports = calculateDistance;