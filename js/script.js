const slide = document.getElementsByClassName('main1');
const fadein = document.getElementsByClassName('sub');

function slideFunction() {

    for (let i = 0; i < slide.length; i++){
    slide[i].removeAttribute("id");
    void slide[i].offsetWidth;    
    slide[i].setAttribute("id", "slideKiri");
    slide[i].removeAttribute("onclick");
  }

  fadein[0].setAttribute("id", "fadein");

  

}
