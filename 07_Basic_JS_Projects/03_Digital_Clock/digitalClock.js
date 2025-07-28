const clock = document.getElementById("clock");

// running every time so that it updates time again and again automatically so that we used setInterval 

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
