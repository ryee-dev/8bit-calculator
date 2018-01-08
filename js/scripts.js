
/*var temperature = function(tempF) {
  return (tempF - 32) * (5 / 9);
};

var tempF = parseInt(prompt("Please enter a temperature in Fahrenheit:"));


alert(temperature(tempF) + "degrees celsius");

*/

/*
var BMI = function(weight, height) {
  return weight / (height * height);
};

var weight = parseInt(prompt("Please enter your weight in lbs: "));
var height = parseInt(prompt("Please enter your height in inches: "));

alert(BMI(weight, height));
*/

/*
1. Teaspoon -> cup
2. cup -> gallons
3. gallon -> keg
*/

var tspCup = function(cup) {
  return (cup * 48);
};

var cup = parseInt(prompt("How many cups would you like to convert into teaspoons?"));

alert(tspCup(cup));

var cupGal = function(gal) {
return(gal * 16);
};

var gal = parseInt(prompt("How many gallons would you like to convert into cups?"));

alert(cupGal(gal));

var galKeg = function(keg) {
  return (keg * 15.5);
};
var keg = parseFloat(prompt("How many kegs would you like to convert into gallons?"));

alert(galKeg(keg));
