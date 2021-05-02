var slideindex,slides,dots;

function initgallery(){

  slideindex = 0;
  slides = document.getElementsByClassName("imageholder");
  slides[slideindex].style.opacity = 1;
  dots = [];
  var dotscontainer = document.getElementById("dotscontainer");

  for(var i=0 ; i<slides.length ; i++){
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onClick", "moveSlide("+i+")");
    dotscontainer.append(dot);
    dots.push(dot);

  }

  dots[slideindex].classList.add("active");
}

initgallery();

function plusslide(n){
  moveSlide(slideindex+n);
}

function moveSlide(n){
  var i,current,next;
  var movSlideAnimClass={
    forCurrent:"",
    forNext:""
  }
  if (n>slideindex)
  {
    if(n>=slides.length){n=0}
     movSlideAnimClass.forCurrent="moveLeftCurrentSlide";
     movSlideAnimClass.forNext="moveLeftNextSlide";
  }else if(n<slideindex){
    if(n<0){n=slides.length-1}
     movSlideAnimClass.forCurrent="moveRightCurrentSlide";
     movSlideAnimClass.forNext="moveRightNextSlide";

  }
  if(n!=slideindex){
    next=slides[n];
    current=slides[slideindex];
    for(i=0;i<slides.length;i++){
      slides[i].className="imageholder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }

    current.classList.add(movSlideAnimClass.forCurrent);
    next.classList.add(movSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideindex=n;

  }
}

var timer=null;
function setTimer(){

  timer = setInterval(function (){
    plusslide(1);
  },3000)

}
setTimer();
setInterval(timeleft)
function timeleft(){
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var sec = time.getSeconds();
  var hrsLeft = 24 - hrs;
  var minsLeft = 59 - mins;
  var secLeft = 59 - sec; 
  var timeLeft = hrsLeft + ':' + minsLeft + ':' + secLeft + ' Time Left';
  document.getElementById("timer").innerText = timeLeft;
}

var images = ["dd1.png", "dd2.png"];
var imgs = [ "dd3.png", "dd4.png"];
var fiximg = ["dd5.png"];
function choose(){


    var rand1 = Math.floor(Math.random() * images.length);
    var rand2 = Math.floor(Math.random() * imgs.length);
    var rand3 = Math.floor(Math.random() * fiximg.length);
    
      document.getElementById("img1").src = images[rand1];
      document.getElementById("img2").src = imgs[rand2];
      document.getElementById("img3").src = fiximg[rand3];
    
    

}
choose();