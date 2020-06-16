
$(document).ready(function(){
    $('.full-menu').hide();
    $('#btn-menu').click(function(){
      $('.menu').toggleClass('close');
      $('.full-menu').slideToggle(600);
    
    });

});


//scroll iconos bajar

$('#top-abajo').on('click', function(){
    $('html, body').animate( {scrollTop: 600}, 1000);
    $('top-ver').css("background","#F45C5C");
      
})

$('#desplazar').on('click', function(){
    $('html, body').animate( {scrollTop: 1140}, 1000);
    $('desplazar').css("background","#F45C5C");
      
})

$('#btn-icono').on('click', function(){
    $('html, body').animate( {scrollTop: 500}, 1000);
    $('btn-icono').css("background","#F45C5C");
      
})

$('#boton').on('click', function(){
    $('html, body').animate( {scrollTop:620}, 1000);
    $('boton').css("background","#F45C5C");
      
})

$('#icon-subir').on('click', function(){
    $('html, body').animate( {scrollTop:1800}, 1000);
    $('icon-subir').css("background","#F45C5C");
      
})


// subir arriba

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 0) {
        $('#icon-btn').slideDown(100);
        } else {
          $('#icon-btn').slideUp(100);
            }
      });
      $('#icon-btn').on('click', function(){
      $('body, html').animate({
        scrollTop: 0
        }, 700);
        return false;
      });
});


//Página tag

 function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-contenedor");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("i-tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
        // tab open
        document.getElementById("defaultOpen").click();


