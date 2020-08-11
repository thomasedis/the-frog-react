// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2020 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if( document.getElementById("countdown")){
    document.getElementById("countdown").innerHTML = `<span class="countdown-wrapper"><span class="text">${days}</span><span class="number">DAYS</span></span>` 
    + `<span class="countdown-wrapper"><span class="text">${hours}</span><span class="number">HRS</span></span>`
    +`<span class="countdown-wrapper"><span class="text">${minutes}</span><span class="number">MINS</span></span>` 
    + `<span class="countdown-wrapper"><span class="text">${seconds}</span><span class="number">SECS</span></span>`;
  }
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TIME UP";
  }
}, 1000);