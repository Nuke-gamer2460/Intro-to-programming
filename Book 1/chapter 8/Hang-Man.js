//#3
let words = [
    "cute",
    "wood",
    "discipline",
    "seize",
    "ceiling",
    "release",
];

function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
    let initialArray = [];
    for (let i = 0; i < word.length; i++) {
        initialArray.push(" _ ");
    }
    return initialArray;
}

function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
}

function getGuess() {
    return prompt("Guess a letter, or click Cancel to stop the game")?.toLowerCase();
}

function updateGameState(guess, word, answerArray) {
    let correctGuesses = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            correctGuesses++;
        }
    }
    return correctGuesses;
}

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showPlayerProgress(answerArray);
alert("Good job! The answer is: " + word);
