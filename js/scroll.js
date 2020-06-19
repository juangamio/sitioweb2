var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {

    var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";

      } else {
            document.getElementById("navbar").style.top = "-100px";
            document.getElementById("navbar").style.borderBottom = "1px dotted #ff57229e";
            //document.getElementById("navbar").style.background = "#ff5722";
       }
      prevScrollpos = currentScrollpos;
}