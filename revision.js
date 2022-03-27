// ## 01 - Alphabet

// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"

const sortLetters = (str) => {
    var lettersArray = str.split("")
    var lettersSort = lettersArray.sort()
    var lettersJoin = lettersSort.join("")

    console.log(lettersJoin)
}

sortLetters("konexio")

// ## 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

const countEach = (str) => {

    var oCounter = 0
    var xCounter = 0

    for (var i = 0; i < str.length; i++) {
        
        if (str[i] === "o") {
            oCounter ++
        }
        else if (str[i] === "x") {
            xCounter ++
        }
    }

    if (oCounter === xCounter) {
        console.log("true")
    } else {
        console.log("false")
    }
    // console.log(oCounter)
    // console.log(xCounter)
}

countEach("xxxoooox")
countEach("xox")

// ## 03 - Palindrome
// console.log("-----------------------------------------------------------------------------")

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

const checkPal = (str) => {

    var pal = str.split("")
    var pal1 = pal.reverse()
    var pal2 = pal1.join("")

    if (pal2 === str){
        return "pal"
    } else {
        return "no pal"
    }
}

var palindrome = checkPal("racecar")
    palindrome = checkPal("laptop")
console.log(palindrome)

// ## 04 - Swap

// - Créez une fonction `swap` qui reçoit une string en paramètre
// - La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// - Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

const swap = (str) => {
    var newSentence = ""

    for(var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newSentence += str[i].toUpperCase()
        } else {
            newSentence += str[i].toLowerCase()
        }
    }
    console.log(newSentence)
}

swap("Hello World")

//  Bonus

// - Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
// - La fonction retourne une string avec le même texte en alternant majuscule / minuscule
// - Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat

const makeItSpongeBob = (str) => {
    let newSentence = str.split(" ")
    let result = ""

    for (var i = 0; i < newSentence.length; i++) {
        for (var j = 0; j < newSentence[i].length; j++) {
            if ( j % 2 === 0 ) {
                result += newSentence[i][j].toLowerCase()
            } else {
                result += newSentence[i][j].toUpperCase()
            }
        }
        result += " "
    }
    console.log("newSentence :", newSentence)
    console.log("result :", result)
}

makeItSpongeBob("Javascript is easy")

// ## ⭐ Bonus II

// - tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
// - si non corrigez le !

const sortLetters2 = (str) => {
    var lettersToLower = str.toLowerCase()
    var lettersArray = lettersToLower.split("")
    var lettersSort = lettersArray.sort().join("")

    console.log(lettersSort)
}

sortLetters2("KoNeXio")

// ## ⭐ Bonus III

// - Que retourne votre fonction de l'exercice 2 si vous lui passez autre chose que des x ou des o ? ou des X et O majuscules ?
// - Rajoutez un message d'erreur explicite dans le premier cas et comptez les majuscules dans le second.

const countEach2 = (str) => {

    var oCounter = 0
    var xCounter = 0
    var uperLetters = 0
        
    for (var i = 0; i < str.length; i++) {
        
        if (str[i] === "o") {
            oCounter ++
        } else if (str[i] === "x") {
            xCounter ++
        } else if (str[i] === str[i].toUpperCase()) {
            uperLetters ++
        } else {
            console.log("il n'y a aucun o ou x")
        }
    }

    if (oCounter === xCounter) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("uperLetters :", uperLetters)
}


countEach2("oooaxxx")
countEach2("ahha")
countEach2("ahHFFFHHha")



// const transform = (str) => {
    // return str.split("o").join("opo")
    // if (str.split("o")) {
    //     str.join("opo")
    // } else if ( str.split("e")) {
    //     str.join("epe")
    // }
//     for (var i = 0; i < str.length; i++) {
//         var o = str.replace("o", "opo")
//          var e = str.replace("e", "epe")
//     }
// }
// console.log(transform('Bonjour'))
// console.log(transform("Ceci est un test pour HDM"))
