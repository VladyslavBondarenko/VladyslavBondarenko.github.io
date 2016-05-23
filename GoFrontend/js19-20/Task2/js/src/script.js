(function($) {
	
	console.log('Исходный объект: ', data);
	console.log('В массив скиллов всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту');
	var skills =
			_(data)                                             
			.map('skills')                                      
			.flatten()                                          
			.sortBy()   
			.sortedUniq()    
			.value();    
	console.log(skills);

	console.log('2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends)');
	var names =
			_(data)
			.sortBy(['friends.length', 'name'])                                .map( function (i) { return i.name; } )
			.value();
	console.log(names);

	console.log('3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей');
	var friends =
			_(data)
			.map('friends') 
			.flatten()      
			.map('name')    
			.uniq()
			.value();
	console.log(friends);
	
})();