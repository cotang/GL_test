$(document).ready(function(){

  $('.news__button').on('click',function(){
    $.getJSON('js/test.json', {}, function(json){

      for (var i = 0; i < json.length; i++) {
        var ul = $('.newslist__list');
        var liNew = '<li class="newslist__item"></li>';
          $(ul).append($(liNew));        
        var li = $('.newslist__item:last'); 

        if (json[i].image != undefined) {
          $(li).append('<img src=' + json[i].image + ' height="146" width="206" alt="lorem">');
        };

        var content = '<div class="newslist__content"></div>';
          $(li).append(content);
          $(li).find('.newslist__content').append('<div class="newslist__date">' + json[i].date + '</div>')
            .append('<a href="' + json[i].url + '">' + json[i].title + '</a>')                   
            .append('<div class="newslist__text">' + json[i].preview + '</div>')
          $(li).find('a').wrap('<h3 class="newslist__title"></h3>');
      };
    });  
      $('.news__button').hide();                  
  });



  /* Open the modal window */
  $('.form__button').on('click', function(event){ 
    event.preventDefault();
    $('.overlay').fadeIn(400,
      function(){ 
        $('.modal') 
          .show()
          .animate({opacity: 1}, 200); 
    });
  });
  /* Close the modal window */
  $('.overlay').on('click', function(){ 
    $('.modal')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).hide();
          $('.overlay').fadeOut(400);
        }
      );
  });


  var inputTel = $('#feedback').find('input[type="tel"]');
  var inputEmail = $('#feedback').find('input[type="email"]'); 

  $(inputTel).on('change', function(){
    if ($(this).val() != undefined) {
      $(inputEmail).attr('required', false);
    };
    if ($(this).val() == "") {
      $(inputEmail).attr('required', 'required');
    };    
  });
  $(inputEmail).on('change', function(){
    if ($(this).val() != undefined) {
      $(inputTel).attr('required', false);
    };
    if ($(this).val() == "") {
      $(inputTel).attr('required', 'required');
    };
  });
//  ||
// .removeAttr('required');




    var inputSubmit = $('#feedback').find('input[type="submit"]');
  $(inputSubmit).on('click',function(){
   // var strInForm = $('#feedback').serialize();
    // ajax body
    $.ajax({
      url: 'js/feedback.json',
      dataType: 'json',
      // data: strInForm,
      success: function(json) {
        var result = '<span class="notification-success">' + json[0].msg + '</span>'; //success message
        $('.form-notif').html(result); //show success message
      },
      error: function(json) {
        var result = '<span class="notification-error">' + json[1].msg + '</span>'; //error message
        $('.form-notif').html(result); //show error message
      }     
    });
  });



    var content = $('.content');
    var fixblock_width = $(content).parent().width();
    var fixblock_pos = $(content).position().top;

    // $(window).scroll(function(){
    //    if ($(window).scrollTop() > fixblock_pos){ 
    //       $(content).css({'position': 'fixed', 'top':'0px', 'z-index':'10', 'width':fixblock_width}); 
    //    }else{  
    //       $(content).css('position', 'relative'); 
    //    }
    // });

    var contentLink = $('.content').find('a');
    $(contentLink).click( function(){
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });


    var newsButton = $('.news__json');
    $(newsButton).click(function(event){
    event.preventDefault();      
      $('.news__data').slideToggle();
    });

    var formButton = $('.form__json');
    $(formButton).click(function(event){
    event.preventDefault();      
      $(this).parent().next('.form__data').slideToggle();
    });
    
});


