//#1
let words = [
    "cute",
    "wood",
    "dicipline",
    "seize",
    "ceiling",
    "resease",
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray =[];
for (let i = 0; i< word.length; i++) {
    answerArray[i] = " _ ";
}

let remaningLetters = word.length;

while(remaningLetters > 0){
    alert(answerArray.join(""))
    //#2
    let guess = prompt ("Guess a letter, or Click Cancel to stop the game").toLowerCase();

    if (guess===0){
        break;
    
}   else if (guess.length !==1 ){
    alert("Please enter a single letter");

}   else {
        for(let j = 0; j < word.length; j++) {
     if(word[j] === guess) {
        answerArray[j] = guess;
        remaningLetters -- ;


        
             }
        }
    }
}

alert(answerArray.join(" "));
alert("Good Job, The Answer is " + word);
