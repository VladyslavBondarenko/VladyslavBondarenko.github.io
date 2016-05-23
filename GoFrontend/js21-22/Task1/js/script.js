function pow(num, power) {
	var result = 1;
	
	if ((+num * 1) !== +num) {
		return 'Неорректное значение num';
	}
	if ((+power * 1) !== +power) {
		return 'Некорректное значение power';
	}

	if (power < 0) {
		for (var i = -1; i >= power; i--) {
			result /= num;
		}
	} else {
		for (var i = 1; i <= power; i++) {
			result *= num;
		}
	}
	
	if ((num<0)&&(power)) {
		result = -result;
	}
	
	return result;
	
}

try {
	module.exports = pow;
	var args = process.argv.slice(2); 
	console.log(`${args[0]} ^ ${args[1]} = `, pow(args[0], args[1]));
} catch (e) {}


