const slide = document.getElementsByClassName('main1');
const sub = document.getElementsByClassName('sub');
const lib = document.getElementById("fotos");


function appendImage(parent, imageSrc){
  let image = document.createElement('img');
  image.src = imageSrc;
  parent.appendChild(image);
} //for append child


function show1(){
  removeElement()
  let block = document.getElementById("block1");
  let photos = document.getElementById('photos');

  for (let i = 1; i <= 13; i++){
    appendImage(photos, `image/disnatalis/D${i}.JPG`);
  }

  block.setAttribute("onclick", "removeElement()");
}

function show2(){
  removeElement()
  const block = document.getElementById("block2");
  const photos = document.getElementById('photos');

  for (let i = 1; i <= 23; i++){
    if (i === 23){
      fileName = ".png"
    } else {
      fileName = ".jpg"
    }
    appendImage(photos, `image/inagurasi/${i}${fileName}`);
  }

  block.setAttribute("onclick", "removeElement()");
}





function removeElement(){
  const block = document.getElementById("block1");
  const block2 = document.getElementById("block2");
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
  block2.setAttribute("onclick", "show2()");
}

//////////////ABORTED PROJECT///////////////////////
//////////////ABORTED PROJECT///////////////////////
//////////////ABORTED PROJECT///////////////////////

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
