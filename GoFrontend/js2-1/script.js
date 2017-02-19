var num = prompt('Enter integer: ');
var power = prompt('Enrer the power of the integer: ');
console.log(num, '^', power, ' = ', pow(num, power) );

function pow(num, power) {
    var result = 1;
    if (power < 0) {
        for (var i = 0; i > power; i--) {
            result /= num;
        }
    } else {
        for (var i = 0; i < power; i++)
            result *= num;
    }
    return result;
};

