function wrongGuessCount(word, guesses) {
    return guesses.filter(guess => word.indexOf(guess) != -1).length;
}
console.log("test wrong guesses: ", wrongGuessCount("hello", ["e", "d", "x", "o"]) === 2);

function showGuess(word, guesses) {
    return word.split("").map((guess) => {
        if (guesses.includes(guess)) {
            return guess;
        } else {
            return "_";
        }
    }).join(" ");
}
console.log("test show guess 1:", showGuess("hello", ["l"]) === "_ _ l l _");
console.log("test show guess 2:", showGuess("hello", ["l", "a", "e"]) === "_ e l l _");

function isWinner(word, guesses) {
    return word.split("").map((guess) => {
        if (guesses.includes(guess)) {
            return guess;
        }
    }).join("") === word;
}
console.log("test winner 1:", !isWinner("hello", ["e", "x"]));
console.log("test winner 2:", isWinner("hello", ["o", "l", "e", "h"]));

const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output:process.stdout});

function next(word, guesses) {
    Object.freeze(guesses);
    console.log(showGuess(word, guesses));
    console.log(wrongGuessCount(word, guesses));

    if(isWinner(word, guesses)) {
        console.log("YOU WON");
        return;
    }

    // Ask for the next letter, the function given will run after the user hits return
    rl.question("next letter? ", answer => {
        answer = answer.trim();
        console.log("player wrote:", answer);
        next(word, guesses.concat([answer]));
    });
}

next("jazz", []);
