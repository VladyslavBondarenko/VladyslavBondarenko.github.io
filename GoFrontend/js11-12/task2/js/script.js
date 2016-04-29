$(document).ready(function() {
  
  var html = $('#result').html();
  
  var Bondarenko = {
    name: 'Владислав Бондаренко',
    profession: 'Студент КПИ',
    reasons: ['На моей IT-специальности мало IT-предметов',
              'Нужно учиться и найти хорошую работу',
              'Фронтенд - интересно, своеобразное творчество'],
    number: '+380975785762',
    vk: 'vk.com/i_moi_adres',
    feedback: 'Если нужно, помогу с матаном'
  };
  
  var content = tmpl(html, Bondarenko);
  $('body').append(content);
  
});
