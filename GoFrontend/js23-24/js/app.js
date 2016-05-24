requirejs.config({
    paths: {
        "jquery": "https://code.jquery.com/jquery-2.2.4.min"
    },
    shim: {
        "tmpl": {
            "exports": "tmpl"
        }
    }
});

requirejs(["jquery", "model", "view", "controller"], function ($, Model, View, Controller) {
    'use strict';
  var firstToDoList = ['Сделать то же, что было показано в видео', 'Добавить возможность редактирования ', 'Вынести классы Model, View, Controller в отдельные файлы'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});