var num = prompt('Enter integer: ');
var power = prompt('Enrer the power of the integer: ');
console.log(num, '^', power, ' = ', pow(num, power) );

function pow(num, power) {
    if (power < 0)
        return 'Error. Please enter power >= 0';
    var result = 1;
    for (var i = 0; i < power; i++)
        result *= num;
    return result;
}



