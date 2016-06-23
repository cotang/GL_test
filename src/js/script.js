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


});


