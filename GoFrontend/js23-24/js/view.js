define(["jquery", "tmpl"], function ($, tmpl) {
  'use strict';
	
	return function View(model) {
		var self = this;

		function init() {
			var wrapper = tmpl($('#wrapper-template').html());
			$('body').append(wrapper);
			self.elements = {
				item: $('.item-data'),
				input: $('.item-value'),
				addBtn: $('.item-add'),
				listContainer: $('.item-list')
			};
			self.renderList(model.data);
		};

		self.renderList = function(data) {
			var list = tmpl($('#list-template').html(),{data: data});
			self.elements.listContainer.html(list);
		}

		init();
	}
});