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
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
var calc = 0
const clickForMore = async () => {
  var a = document.getElementsByClassName("pixel")
  a[0].focus()
  setTimeout(() => {
    if(calc == 0)  {
    var di = document.getElementsByClassName("inputs")
    let btn = document.createElement("button");
    calc = 1
    btn.className = "button"
    btn.innerHTML = "Submit";
    btn.onclick =async function(){
      var pix = document.getElementsByClassName("pixel")
      var email = pix[0].value
      var valid = validateEmail(email)
      if(valid) {
      var res = await fetch("https://mpbnf28kl4.execute-api.eu-west-1.amazonaws.com/emails-22", {
        method: "POST",
        mode: "no-cors",
        body: email
      })
      }
      else {
        console.log(email)
      }
    }
    
    di[0].appendChild(btn)
  }
  },1000)
}