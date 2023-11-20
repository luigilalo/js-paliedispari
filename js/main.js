// chiedo all'utente di inserire una parola

let usersWord = prompt("Inserisci un parola")

// stamp

console.log(usersWord)

function checkPalindrome (choosenWord) { 
    return choosenWord == choosenWord.split('').reverse().join('');
}

console.log("La parola è palindroma? " + checkPalindrome(usersWord));
