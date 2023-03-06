var eventData = new Date('Nov 14, 2023 09:00:00').getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  
  var dateUntilEvent = eventData - now;
  
  var days = String(Math.floor(dateUntilEvent / (1000 * 60 * 60 * 24))).padStart(2, "0");
  var hours = String(Math.floor(dateUntilEvent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
  var minutes = String(Math.floor(dateUntilEvent % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
  var seconds = String(Math.floor(dateUntilEvent % (1000 * 60) / 1000)).padStart(2, "0");

  const daysDiv = document.getElementById('dias');
  daysDiv.innerHTML = `${days}`;

  const hoursDiv = document.getElementById('horas');
  hoursDiv.innerHTML = `${hours}`;

  const minutesDiv = document.getElementById('minutos');
  minutesDiv.innerHTML = `${minutes}`;

  const secondsDiv = document.getElementById('segundos');
  secondsDiv.innerHTML = `${seconds}`;

  if (dateUntilEvent < 0) {
    daysDiv.innerHTML = `00`;
    hoursDiv.innerHTML = `00`;
    minutesDiv.innerHTML = `00`;
    secondsDiv.innerHTML = `00`;
    clearInterval(x);
    subscribeButton.disabled = true;
  } else {
    subscribeButton.disabled = false;
  }

}, 1000);

var subscribeButton = document.getElementById("subscribe");
var modal = document.getElementById("modal");
var closeButton = document.getElementsByClassName("close")[0];

subscribeButton.addEventListener('click', () => {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  console.log('clicou no botao');
});

closeButton.addEventListener('click', () => {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  console.log('clicou no modal');
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    console.log('clicou no window');
  }
});

const inputName = document.getElementById('name');
const divName = document.getElementsByClassName('nome')[0];

inputName.addEventListener('focusin', () => {
  divName.style.borderWidth = '2px';
});

inputName.addEventListener('focusout', () => {
  divName.style.borderWidth = '1px';
});

const inputEmail = document.getElementById('email');
const divEmail = document.getElementsByClassName('email')[0];

inputEmail.addEventListener('focusin', () => {
  divEmail.style.borderWidth = '2px';
});

inputEmail.addEventListener('focusout', () => {
  divEmail.style.borderWidth = '1px';
});