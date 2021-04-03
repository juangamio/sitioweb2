// preguntas frecuentes
 $(function(){
      $(".enlace-item").click(function(e){
               
            e.preventDefault();
        
            var contenido=$(this).next(".content-terminos");

            if(contenido.css("display")=="none"){ //open    
              contenido.slideDown(250);     
              $(this).addClass("open");
            }
            else{ //close   
              contenido.slideUp(250);
              $(this).removeClass("open");  
            }
          });
    });

 

//icono animado abajo 

$('#abrir').on('click', function(){
    $('html, body').animate( {scrollTop: 700}, 1000);
    $('top-ver').css("background","#F45C5C");
      
})




//abri menu icon 
 function showNav(){
  document.getElementsByClassName("nav-menu")[0].classList.toggle("active");
}


// subir arriba

$(document).ready(function(){
          $(window).scroll(function(){
            if($(this).scrollTop() > 0) {
              $('#icon-btn').slideDown(300);
            } else {
              $('#icon-btn').slideUp(300);
            }
          });
          $('#icon-btn').on('click', function(){
          $('body, html').animate({
              scrollTop: 0
            }, 700);
            return false;
          });
      });


//pagina web 
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