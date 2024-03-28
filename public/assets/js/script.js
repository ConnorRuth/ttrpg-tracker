// imports the necessary functions from the dice-utils package
const { roll, rollMany } = require('dice-utils');

// function to roll a single die with the specified number of sides
function rollDie(sides) {
  return roll(`1d${sides}`);
}

// function to roll a specified number of dice with a specified number of sides
function rollDice(quantity, sides) {
  return rollMany(`${quantity}d${sides}`);
}

// example usage:
console.log("Rolling a d20:", rollDie(20)); // Roll a single d20
console.log("Rolling 2d6:", rollDice(2, 6)); // Roll 2 six-sided dice
console.log("Rolling 3d10:", rollDice(3, 10)); // Roll 3 ten-sided dice
