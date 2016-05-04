var Human = {
	name: 'Vasya',
	age: 20,
	sex: 'male',
	growth: 180,
	weigth: 90
}

var worker1 = {
	workPlace: 'frontend-developer',
	salary: 400,
	toWork: function() {
		console.log("I'm "+this.name+". I'm working");
	}
}
worker1.__proto__ = Human;

var worker2 = {
	workPlace: 'designer',
	salary: 300,
	toWork: function() {
		console.log("I'm "+this.name+". I'm working");
	}
}
worker2.__proto__ = Human;

var student1 = {
	placeOfStudy: 'KPI',
	scholarship: 825,
	toWatchSerials: function() {
		console.log("I'm "+this.name+". I'm watching serials");
	}
}
student1.__proto__ = Human;

var student2 = {
	placeOfStudy: 'KNU',
	scholarship: 825,
	toWatchSerials: function() {
		console.log("I'm "+this.name+". I'm watching serials");
	}
}
student2.__proto__ = Human;

console.log(student1);
console.log(student2);
console.log(worker1);
console.log(worker2);
console.log('Human.name',Human.name);
console.log('Human.age',Human.age);
console.log('student1.name',student1.name);
console.log('worker2.age',worker2.age);
