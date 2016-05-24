define(function () {
	'use strict';

	return function Model(data) {
		var self = this;

		self.data = data;

		self.addItem = function(item) {
			if (item.lenght === 0) {
				return;
			}
			self.data.push(item);	
			return self.data;
		};

		self.removeItem = function(item) {
			var index = self.data.indexOf(item);
			if (index === -1) {
				return;
			}
			self.data.splice(index, 1);
			return self.data;
		};

		self.editItem = function(item, newItem) {
			var index = self.data.indexOf(item);
			if (index !== -1) {
				self.data[index] = newItem;
				return self.data;
			}
		};
	};
	
});