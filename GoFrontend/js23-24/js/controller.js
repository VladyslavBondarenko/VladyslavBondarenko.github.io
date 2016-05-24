define(["jquery", "model", "view"], function ($, model, view) {
  'use strict';

	return function Controller(model, view) {
		var self = this;
		view.elements.addBtn.on('click',addItem);
		view.elements.listContainer.on('click', '.item-delete',  removeItem);
		view.elements.listContainer.on('click', '.item-edit', editItem);

		function addItem() {
			var newItem = view.elements.input.val();
			model.addItem(newItem);
			view.renderList(model.data);
			view.elements.input.val('');
		}

		function removeItem() {
			var item = $(this).attr('data-value');
			model.removeItem(item);
			view.renderList(model.data);
		}

		function editItem() {
			var item = $(this).attr('data-value');
			var newItem = prompt('Изменить заметку:', item);
			if (newItem && (newItem !== item)) {
				model.editItem(item, newItem);
				view.renderList(model.data);
			}
		};
	};
});