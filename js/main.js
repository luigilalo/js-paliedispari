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

let randomNumber = createRandomNumber (1, 5);
console.log(`numero scelto dal computer:${randomNumber}`);

/* Sommiamo stabilendo se la somma dei due numeri è pari o dispari (usando una funzione) */

function sumElements(element1, element2){
    let sum = element1 + element2;
    if (sum % 2 === 0) {
        sum = "pari";
    }
    else{
        sum = "dispari";
    }
    return sum;
}
/* Dichiariamo chi ha vinto. */

let oddEven = sumElements (userNumber, randomNumber);
console.log(`risultato somma = ${oddEven}`); 



if (oddEven === oddOrEven.toLowerCase()) {
    let result = "Hai vinto!";
    console.log(result)
    alert(result);
}
else {
    let result = "Hai perso!";
    console.log(result)
    alert(result)

}
