var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {

    var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";
     

      } else {
            document.getElementById("navbar").style.top = "-55px";
            /*document.getElementById("navbar").style.borderBottom = " 1px dotted #fff";*/
            
            document.getElementById("navbar").style.background = "#194f7aed";

       }
      prevScrollpos = currentScrollpos;
    
}
