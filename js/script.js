const slide = document.getElementsByClassName('main1');
const sub = document.getElementsByClassName('sub');
const lib = document.getElementById("fotos");



function show1(){
  const block = document.getElementById("block1");
  const photos = document.getElementById('photos');

  const image = document.createElement('img'); //putting this inside
  image.src = "image/aam.jpg";
  photos.appendChild(image);

  const image2 = document.createElement('img'); //putting this inside
  image2.src = "image/aldi.jpg";
  photos.appendChild(image2);

  const image3 = document.createElement('img'); //putting this inside
  image3.src = "image/alfi.jpg";
  photos.appendChild(image3);

  block.setAttribute("onclick", "removeElement()");
}


function removeElement(){
  const block = document.getElementById("block1");
  const photos = document.getElementById("photos");
  if (photos){
    const image = photos.getElementsByTagName("img");
    if (image){
      let a = 0;
      while (image.length > 0) {
        image[0].remove();
      }
    }
  }

  block.setAttribute("onclick", "show1()");
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
