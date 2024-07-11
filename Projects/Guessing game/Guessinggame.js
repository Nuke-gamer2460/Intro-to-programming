
let secret = Math.floor(Math.random() * 20) + 1;
let answer = prompt("Please Guess a Number")
let guess = parseInt(answer);



while(guess !== secret){
 if(guess > secret){
    //alert("Incorrect, Too High");
    // prompt("Too High, Guess Again")


    guess = parseInt(prompt("Too High, Guess again"));


 }else if(guess < secret){
    //alert("Incorrect, Too Low");
    //prompt("Too Low, Guess Again")


    guess = parseInt(prompt("Too Low, Guess again"));


}if(guess === secret){
alert("Correct, Then number was " + secret);

}

}


    // if(guess > secret){
    //     alert("Too High");
    // }else if( guess < secret){
    //     alert("Too Low")
    // }