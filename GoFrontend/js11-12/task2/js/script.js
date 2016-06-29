$(document).ready(function() {
  
  var html = $('#result').html();
  
  var Bondarenko = {
    name: 'Владислав Бондаренко',
    img: 'img/photo.jpg',
    profession: 'Студент КПИ',
    reasons: ['На моей IT-специальности мало IT-предметов',
              'Нужно учиться и найти хорошую работу',
              'Фронтенд - интересно, своеобразное творчество'],
    number: '+380975785762',
    vk: 'vk.com/i_moi_adres',
    feedback: 'Если нужно, помогу с матаном'
  };

  var BondarenkoS = {
    name: 'Владислав Станислав',
    img: 'img/photo.jpg',
    profession: 'Студент КПИ',
    reasons: ['не хочу',
              'не буду'],
    number: '+380970860340',
    vk: 'vk.com',
    feedback: 'фидбек'
  };

  var content = tmpl(html, BondarenkoS);
  $('body').append(content);
  
});
