var pow = require('../js/script.js');

describe('tests for pow', function() {
	it('Проверка на некорректные входные данные', function() {
		expect(pow(1,'a')).toEqual('Некорректное значение power');
		expect(pow('a',3)).toEqual('Неорректное значение num');
		expect(pow(undefined,[])).toContain('Неорректное значение');
	});
	it('Проверка на 0 степень', function() {
		expect(pow(3,0)).toBe(1);
		expect(pow(-3,0)).toBe(1);
	});
	it('Проверка на дробные числа', function() {
		expect(pow(0.3,2)).toBe(0.09);
		expect(pow(2,2.2)).toBe(4);
	});
	it('Проверка на отрицательные числа'), function() {
		expect(pow(-2,2)).toBe(-4);
		expect(pow(2,-2)).toBe(0.25);
	};
	it('Проверка на 0 в основании', function() {
		expect(pow(0,3)).toBe(0);
	});
	it('Проверка на 1 в основании', function() {
		expect(pow(1,3)).toBe(1);
	});
});