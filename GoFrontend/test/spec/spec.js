var app = require('../js/app.js');

describe("app", function() {
	it("it should call sayHello method", function() {
		// prepare
		var result;
		
		// act
		result = app.sayHello('Vasya');
		
		// assert
		expect(result).toEqual('Hello, Vasya!');
	});
		
			it("sum()", function() {
		// prepare
		var result;
		
		// act
		result = app.sum(1,2);
		
		// assert
		expect(result).toEqual(3);
	});
});