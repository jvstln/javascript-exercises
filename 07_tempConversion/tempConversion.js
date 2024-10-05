const convertToCelsius = function(temperature) {
  const convertedTemperature = 5 / 9 * (temperature - 32);
  
  return Math.round(convertedTemperature * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const convertedTemperature = 9 / 5 * temperature + 32;
  
  return Math.round(convertedTemperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
