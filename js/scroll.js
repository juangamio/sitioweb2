var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {

    var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";

      } else {
            document.getElementById("navbar").style.top = "-100px";
            document.getElementById("navbar").style.borderBottom = "0.4px solid 0";
       }
      prevScrollpos = currentScrollpos;
}