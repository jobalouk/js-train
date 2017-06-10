// init pos
// clear all intervals
// bouton refresh pos

// init variables
const train = document.getElementById('train');
const stopButton = document.getElementById('button-stop')
const refreshButton = document.getElementById('button-refresh')
const limitTrain = document.getElementById('train-limit');

// positions
let pos = 0;
let intervalID = 0;

function forwardX () {
  pos += 5;
  train.style.left = pos + "px";

  //stop train when hitting the side
  if(pos == 600) {
    clearInterval(intervalID);
    alert('BOOM!');
    train.style.left = "0px";
  }

  console.log(pos);
}

function moveForward() {
  intervalID = setInterval(forwardX, 17);
  //stop the train when click stop
  stopButton.onclick = function stopTrain() {
    alert('Oups');
    clearInterval(intervalID);
  }
}

function trainMoveForwardOnClick () {
  train.onclick = moveForward;
}

trainMoveForwardOnClick();
