'use strict';

$(document).ready(function () {

  var test = JSON.parse(localStorage.getItem('test'));
  var checkedAnswers = void 0;

  var content = tmpl($('#result').html(), test);
  $('body').append(content);

  $('.check').on('click', function () {

    var $result = true;

    $('.checkbox').each(function () {
      if ($(this).prop('checked') != $(this).attr('value')) {
        $result = false;
        return false;
      }
    });

    $('.modal_text')[0].innerHTML = $result ? 'Все ответы верные, тест пройден успешно!' : 'Не все ответы верные, попробуйте еще раз';
    $('.modal_window').css("display", "block").animate({ opacity: 1 }, 500);
    $('.overlay').show().animate({ opacity: 0.3 }, 500);
  });

  $('.modal_button').on('click', function () {

    $('.modal_window').animate({ opacity: 0 }, 500, function () {
      $(this).css("display", "none");
    });
    $('.overlay').animate({ opacity: 0 }, 500).hide();
    $('.checkbox').each(function () {
      $(this).prop('checked', false);
    });
  });
});
