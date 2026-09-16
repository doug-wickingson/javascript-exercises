const sumAll = function(a, b) {
	sum = 0;
	
	if (b > a && b > 0 && a > 0) {
		for (let i = 0; i <= b - a; i++) {
			sum += a + i;
		}
		
		return sum;	
	}

	return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
