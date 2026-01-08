
// const slide = document.getElementsByClassName('main1');
// const sub = document.getElementsByClassName('sub');
// const lib = document.getElementById("fotos");


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
    if (i !== 6){
      appendImage(photos, `image/disnatalis/D${i}.JPG`);
    }
  }
  autoScroll();
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
  autoScroll();
  block.setAttribute("onclick", "removeElement()");
}

function show3(){
  removeElement()
  const block = document.getElementById("block3");
  const photos = document.getElementById('photos');

  for (let i = 1; i <= 43; i++){
    if (i !== 31){
      appendImage(photos, `image/villa/${i}.jpg`);
    
    }
  }
  autoScroll();
  block.setAttribute("onclick", "removeElement()");
}

function show4(){
  removeElement()
  const block = document.getElementById("block4");
  const photos = document.getElementById('photos');

  for (let i = 1; i <= 10; i++){
      appendImage(photos, `image/kelas/${i}.jpg`);
  }
  autoScroll();
  block.setAttribute("onclick", "removeElement()")
}




function removeElement(){
  const block = document.getElementById("block1");
  const block2 = document.getElementById("block2");
  const block3 = document.getElementById("block3");
  const block4 = document.getElementById("block4");
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
  block3.setAttribute("onclick", "show3()");
  block4.setAttribute("onclick", "show4()");
}


function autoScroll(){
  window.scrollTo(0, 1476);
}

function scrollUp(){
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
const xPosition = window.scrollY;
const yPosition = window.scrollX;
console.log(`scroll position : y=${yPosition}, x=${xPosition}`);

if (xPosition >= 1000) {
  addClass();
} else {
  removeClass();
}
})

function removeClass () {
  const MyElement = document.getElementById("up1");
  MyElement.removeAttribute("class");
}

function addClass(){
  const MyElement = document.getElementById("up1");
  MyElement.setAttribute('class', "scrollUp");
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
