document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  //var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  var date2 = new Date("2022-11-04");
  var diff = date2.getTime() - new Date().getTime();
  var twoDaysFromNow =new Date().getTime() / 1000 + diff / 1000 + 1;
  console.log(twoDaysFromNow)

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });




  // Toggle theme
  let body = document.body;
  body.classList.toggle('light-theme');
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  /*var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  }, 1000);*/

  // Show version number

});

var shooting = false
console.log(123)
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
var calc = 0
const clickForMore = async () => {
  if(calc == 0) {
    var signupbutton = document.getElementById("signup")
    signupbutton.remove()
    var a = document.getElementsByClassName("pixel")
    a[0].focus()
    var b = document.createElement("input")
    b.className = "pixel3"
    b.placeholder = "Enter your email!"
    b.id="but12"
    var inp = document.getElementsByClassName("inputs")
    setTimeout(()=>{inp[0].appendChild(b)
      a[0].remove()},1000)
  }
  setTimeout(() => {
    if(calc == 0)  {
    var di = document.getElementsByClassName("inputs")
    let btn = document.createElement("button");
    calc = 1
    btn.className = "button"
    btn.id = "but11"
    btn.innerHTML = "Submit";
    btn.onclick =async function(){
    //shooting = true
      var pix = document.getElementsByClassName("pixel3")
      var email = pix[0].value
      var valid = validateEmail(email)
      if(valid) {
        pix[0].value = ""
        pix[0].placeholder = "4.11 - 6.11.2022"
        document.getElementById("Subm").className = "clickSubmit"
        var res = await fetch("https://mpbnf28kl4.execute-api.eu-west-1.amazonaws.com/emails-22", {
          method: "POST",
          mode: "no-cors",
          body: email
        })
        setTimeout(() => {
          document.getElementById("but11").remove();
          document.getElementById("but12").remove()
        },800)
      
      }
      else {
        var pix = document.getElementsByClassName("pixel3")
        pix[0].placeholder = "Invalid Email :)"
        pix[0].value = ""
        console.log(email)
        //document.getElementById("Subm").className = "clickSubmit"
      }
    }
        
   
    di[0].appendChild(btn)
  }
  },1000)
}



document.addEventListener('DOMContentLoaded', () => {
/*
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.opacity = 0;
var ctx = canvas.getContext("2d");
function Firework(x,y,height,yVol,R,G,B){
  this.x = x;
  this.y = y;
  this.yVol = yVol;
  this.height = height;
  this.R = R;
  this.G = G;
  this.B = B;
  this.radius = 2;
  this.boom = false;
  var boomHeight = Math.floor(Math.random() * 200) + 50;
  this.draw = function(){
   
   ctx.fillStyle = "rgba(" + R + "," + G + "," + B + ")";
    ctx.strokeStyle = "rgba(" + R + "," + G + "," + B + ")";
    ctx.beginPath();
 //   ctx.arc(this.x,boomHeight,this.radius,Math.PI * 2,0,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x,this.y,3,Math.PI * 2,0,false);
    ctx.fill();
  }
  this.update = function(){
    this.y -= this.yVol;
    if(this.radius < 20){
      this.radius += 0.35;
    }
    if(this.y < boomHeight){
      this.boom = true;
      
      for(var i = 0; i < 120; i++){
        particleArray.push(new Particle(
          this.x,
          this.y,
          // (Math.random() * 2) + 0.5//
          (Math.random() * 2) + 1,
          this.R,
          this.G,
          this.B,
          1,
        ))

      }
    }
    this.draw();
  }
  this.update()
}

window.addEventListener("click", (e)=>{
    var x = e.clientX;
  var y = canvas.height;
  var R = Math.floor(Math.random() * 255)
  var G = Math.floor(Math.random() * 255)
  var B = Math.floor(Math.random() * 255)
  var height = (Math.floor(Math.random() * 20)) + 10;
  fireworkArray.push(new Firework(x,y,height,5,R,G,B))
})

function Particle(x,y,radius,R,G,B,A){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.R = R;
  this.G = G;
  this.B = B;
  this.A = A;
  this.timer = 0;
  this.fade = false;
 
  // Change random spread
  this.xVol = (Math.random() * 10) - 4
  this.yVol = (Math.random() * 10) - 4
  
  
  console.log(this.xVol,this.yVol)
  this.draw = function(){
 //   ctx.globalCompositeOperation = "lighter"
    ctx.fillStyle = "rgba(" + R + "," + G + "," + B + "," + this.A + ")";
    ctx.save();
    ctx.beginPath(); 
   // ctx.fillStyle = "white"
    ctx.globalCompositeOperation = "screen"
    ctx.arc(this.x,this.y,this.radius,Math.PI * 2,0,false);
    ctx.fill();
   
    ctx.restore();
  }
  this.update = function(){
    this.x += this.xVol;
    this.y += this.yVol;
    
    // Comment out to stop gravity. 
    if(this.timer < 200){
        this.yVol += 0.12;
    }
    this.A -= 0.02;
    if(this.A < 0){
      this.fade = true;
    }
    this.draw();
  }
  this.update();
}

var fireworkArray = [];
var particleArray = [];
for(var i = 0; i < 6; i++){
  var x = Math.random() * canvas.width;
  var y = canvas.height;
  var R = Math.floor(Math.random() * 255)
  var G = Math.floor(Math.random() * 255)
  var B = Math.floor(Math.random() * 255)
  var height = (Math.floor(Math.random() * 20)) + 10;
  fireworkArray.push(new Firework(x,y,height,5,R,G,B))
}


function animate(){

  requestAnimationFrame(animate);
 // ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = "rgba(0,0,0,0.09)"
  ctx.backgroundImage = "images/background.jpg"
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for(var i = 0; i < fireworkArray.length; i++){
    fireworkArray[i].update();
  }
  for(var j = 0; j < particleArray.length; j++){
    particleArray[j].update();
  }
  if(fireworkArray.length < 4){
      var x = Math.random() * canvas.width;
      var y = canvas.height;
      var height = Math.floor(Math.random() * 20);
      var yVol = 5;
      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);          
      var B = Math.floor(Math.random() * 255);
      fireworkArray.push(new Firework(x,y,height,yVol,R,G,B));
      
  }
 
  
  fireworkArray = fireworkArray.filter(obj => !obj.boom);
  particleArray = particleArray.filter(obj => !obj.fade);
  
}

function changeOpacity() {
  fireworkCanvas.style.opacity = 1;  
  fireworkCanvas.style.backgroundSize = "75px 75px";
  fireworkCanvas.style.backgroundImage= "linear-gradient(to right, grey 1px, transparent 0.000001px), linear-gradient(to bottom, grey 1px, transparent 0.1px)"; 
}
var count = 0
function shootFireworks(){
  if(shooting){
    if(count===0){
      animate();
      fireworkCanvas.style.opacity = 1;
      
    }
    count = 1
  }
}
const fireworkCanvas = document.getElementById('canvas');

const fireworkBtn = document.getElementById('shoot');

setInterval(function() {
  shootFireworks()
},1000);


// ✅ Change button text on click
fireworkBtn.addEventListener('click', function handleClick() {
  if(count === 0){
    changeOpacity()
    shootFireworks()
    count = 1
  }

});

window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})*/
});
