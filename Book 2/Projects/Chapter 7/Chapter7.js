// document.getElementById("head").style.transform = "rotate(15deg)";



// document.getElementById("lefteye").style.backgroundColor =
// "lightblue";
// document.getElementById("body").style.border = "2px solid black";
// document.getElementById("mouth").style.borderRadius = "4px"
// // document.getElementById("leftarm").style.transform = "rotate(-45deg)";
// document.getElementById("leftarm").style.backgroundColor =
// "#FF00FF";
// document.getElementById("righteye").style.border =
// "4px yellow dotted";
// document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop ="10px black solid";
// document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "20%";
document.getElementById("mouth").style.backgroundColor = "pink";
document.getElementById("mouth").style.border = "2px solid black"
// document.getElementById("rightarm").style.backgroundColor = "green";

// function armLeft(){

// }

// function armRight(){

// }

// function bodyMove(){

// }

// let bodywobble;
// let armMovment;

// let pupilleft = document.getElementById("pupil1");
// pupilleft.addEventListener("click", moveUpDown)

let rightArm = document.getElementById('rightarm');
rightArm.addEventListener("click", rotate90deg);

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown)

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveLeftRight);

function moveLeftRight(e){
    let left = 0;
    let robotPart = e.target;

    let id =setInterval(frame, 10)

    function frame(){
         robotPart.style.left = left +'%'
         left++;
         if (left === 46){
         clearInterval(id);
    }
    }
}   

function moveUpDown(e){

let robotPart = e.target
let top = 0;

let id = setInterval(frame, 10);


    function frame(){
        robotPart.style.top = top +'%';
        top++;
        if (top === 20){
         clearInterval(id);

        }
}


}

function rotate90deg(e){
   let robotPart = e.target;
   let arm = 0;
   let id = setInterval(frame, 30);

function frame(){

   robotPart.style.left = arm + '%';
   robotPart.style.transform = "rotate(90deg)";
   robotPart.style.transform = "scaleY(1)";
   robotPart.style.width ="5%";
   robotPart.style.left = "";
   robotPart.style.top = "50px"
   arm++;
   
   if (arm === 11){ 
    clearInterval(id)
}
   }
}

let mouthSpeaking = document.getElementById("mouth");
mouthSpeaking.addEventListener("mouseover", talking);

function talking(e){

    let robotPart = e.target
    let top = 60;
    
    let id = setInterval(frame, 100);
    
        function frame(){
            robotPart.style.top = top +'%';
            top += 10;
            if (top === 80){
             clearInterval(id);
    
            }
    }
}

let nose = document.getElementById("nose");
nose.addEventListener("click", noseMoveLeftRight)

function noseMoveLeftRight(e){
    let left = 40;
    let robotPart = e.target;

    let id =setInterval(frame, 10)

    function frame(){
         robotPart.style.left = left +'%';
         left++;
         if (left === 46){
         clearInterval(id);
         }
        }
}


// document.getElementById("body I &lt;3 JS!").string.style.border = "2px solid black";