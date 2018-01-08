var temperature = function(tempF) {
  return (tempF - 32) * (5 / 9);
};

var tempF = parseInt(prompt("Please enter a temperature in Fahrenheit:"));


alert(temperature(tempF) + "degrees celsius");
