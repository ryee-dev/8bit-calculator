
/*var temperature = function(tempF) {
  return (tempF - 32) * (5 / 9);
};

var tempF = parseInt(prompt("Please enter a temperature in Fahrenheit:"));


alert(temperature(tempF) + "degrees celsius");

*/

var BMI = function(weight, height) {
  return weight / (height * height);
};

var weight = parseInt(prompt("Please enter your weight in lbs: "));
var height = parseInt(prompt("Please enter your height in inches: "));

alert(BMI(weight, height));
