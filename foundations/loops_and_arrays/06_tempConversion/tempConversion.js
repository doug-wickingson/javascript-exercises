const convertToCelsius = function(fahrenheit) {
	const celsius = Math.round((fahrenheit - 32) * (5/9)); 
	return celsius; 
};

const convertToFahrenheit = function(celsius) {
	const fahrenheit = Math.round((celsius * 1.8) + 32);
	return fahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
