document.addEventListener('DOMContentLoaded', function () {

  var hourHand = document.querySelector('.hour');
  var minsHand = document.querySelector('.minutes');
  var secondHand = document.querySelector('.seconds');

function setDate() {

  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  var mins = now.getMinutes();
  var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  var hour = now.getHours();
  var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
})
