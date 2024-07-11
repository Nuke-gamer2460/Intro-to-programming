let trainSpeed = 250;
let trainPosition = 0;
let animation;

let train = document.getElementById("train");
train.addEventListener("click", speedUp);


let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
if (trainSpeed > 10) {
trainSpeed -= 300;
clearInterval (animation);
animation = setInterval (frame, trainSpeed);
}
    function frame() {
       trainPosition += 2;
       train.style.left = trainPosition + 'px';
       checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
if (currentPosition === 850) {
alert("CRASH!");
consle.log("CRASH!");
clearInterval(animation);
}
}

function stopTrain() {
if (trainPosition = 900) {
clearInterval (animation);
}
}


