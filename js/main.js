// chiedo all'utente di inserire una parola
/*
let usersWord = prompt("Inserisci un parola")

// stamp
 PAROLA PALINDROMA
console.log(usersWord)

function checkPalindrome (choosenWord) { 
    return choosenWord == choosenWord.split('').reverse().join('');
}

console.log("La parola è palindroma? " + checkPalindrome(usersWord));
*/


// PARI E DISPARI 

let oddOrEven = prompt("Scegli se pari o dispari")
let userNumber =parseInt(prompt("Scegli un numero da 1 a 5"));

console.log(`Hai scelto:${oddOrEven}`);
console.log(`Hai scelto il numero:${userNumber}`);

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */
function createRandomNumber(min, max){

    const newRandomNum = Math.floor(Math.random() * (max - min) + min);
    return newRandomNum
}

