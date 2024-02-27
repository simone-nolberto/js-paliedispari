// esercizio palindroma

// const userWord = prompt("Inserisci una parola");
// console.log(userWord);

// let reverseWord = userWord.split('').reverse().join('');
// console.log(reverseWord);

// if (userWord === reverseWord) {
//     console.log("Questa parola è palindroma");
// } else {
//     console.log("Ritenta con un altra parola");
// }

const userWord = prompt("inserisci una parola")

function reverseUserWord(userWord) {

    let reverseWord = userWord.split('').reverse().join('');
    console.log(userWord);

    if (userWord === reverseWord) {
        console.log("Questa parola è palindroma");
    } else {
        console.log("Ritenta con un altra parola");
    }

    return reverseWord


}

console.log(reverseUserWord(userWord));