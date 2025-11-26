const slide = document.getElementsByClassName('main1');
const sub = document.getElementsByClassName('sub');
const lib = document.getElementById("fotos");

function show(){
  const photos = document.getElementById('photos')
  const image = document.createElement('img'); //putting this inside 
  image.src = "image/aam.jpg";
  photos.appendChild(image);
}

function slideFunction() {

    for (let i = 0; i < slide.length; i++){
    slide[i].removeAttribute("id");
    void slide[i].offsetWidth;    
    slide[i].setAttribute("id", "");
    slide[i].removeAttribute("onclick");
  }
  
    lib.innerHTML += '<img class="sub" src="image/aldi.jpg">';
    lib.innerHTML += '<img class="sub" src="image/bimo.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/alfi.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/alif.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/nanda.jpg"">';
    
    

  for (let i = 0; i < sub.length; i++){
    sub[i].setAttribute("id", "fadein");
  }

}
