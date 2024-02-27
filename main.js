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

// const userWord = prompt("inserisci una parola")

// function reverseUserWord(userWord) {

//     let reverseWord = userWord.split('').reverse().join('');
//     console.log(userWord);

//     if (userWord === reverseWord) {
//         console.log("Questa parola è palindroma");
//     } else {
//         console.log("Ritenta con un altra parola");
//     }

//     return reverseWord


// }

// console.log(reverseUserWord(userWord));



// esercizio Pari o dispari;

const userChoice = prompt("Scegli pari o dispari?");
console.log(`Hai scelto ${userChoice}`);
const userNumb = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(`Il tuo numero è ${userNumb}`);

function pcNumb(numb) {
    let pcNumb = numb;
    return pcNumb;
}

const pcRandomNumb = pcNumb(Math.floor(Math.random() * 5) + 1);
console.log(`Il numero del pc è ${pcRandomNumb}`);

let sum = userNumb + pcRandomNumb;
console.log(`La somma dei numeri è ${sum}`);

function isSumEven(sum) {

    let evenCheck;

    if (sum % 2 === 0) {
        evenCheck = "pari";
        // console.log("Questa somma è pari");
    } else {
        evenCheck = "dispari";
        // console.log("Questa somma è dispari");
    }

    return evenCheck;
}

let checkResults = isSumEven(userNumb + pcRandomNumb);
console.log(`Il risultato dell'operazione è ${checkResults}`);

if (userChoice === checkResults) {
    console.log("Complimenti, hai vinto!");
} else {
    console.log("Spiacente, riprova!");
}
