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
