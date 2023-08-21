//Write a function that will count the letters of a string and add it to a total
// const addstrings = (sentence) => {

//     let arrayOfLetters = []
//     arrayOfLetters = sentence.split('')
//     arrayOfLetters.forEach((letters, index) => {
//         if (letters === ' ') {
//             arrayOfLetters.splice(index, 1)
//         }
//     })
//     return arrayOfLetters.length
// }

// console.log(addstrings("how many letters are in this sentence?"));




 

// Write a function that will return True or False if a number is divisible by 3 & 5

// const divide = (num) =>{
//     if (num % 3 == 0 && num % 5 == 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log (divide(16))

// *Vowel Counter: Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) in it. Add this count to a running total and return the updated total.*

// const counter = (sentence) =>{
//     let array = []
//     total = 0
//     let newsentence = sentence.toLowerCase()
//     array = newsentence.split('')
//     array.forEach((letter)=>{
//         if (letter == "a" ||  letter == "e" ||  letter == "i" ||  letter == "o" ||  letter == "u"   ){
//             total = total + 1 
//     }
// })
// return total
// }
// console.log ("this has ", counter("HOwmnasdfkjjhiLKFJSDHFIEOOOOO"), "vowels in it")


// Even or Odd Checker: Create a function that determines whether a given integer is even or odd. If the number is even, return True; otherwise, return False.

// const evenOdd =(num)=>{
//     if(num% 2==0){
//         num= true
//     } else{
//         num= false
//     }
//     console.log (num)
// }
// evenOdd(22)

// Word Reverser: Build a function that takes a sentence (a string containing multiple words) as input and returns the sentence with the order of words reversed.
// const reverse = (sentence)=>{
//     arrayOfWords = []
//     arrayOfWords= sentence.split(' ')
//     newArray = arrayOfWords.reverse()
  
//     console.log (newArray)

// }
// (reverse("flip it down and reverse it"))
// Palindrome Detector: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Return True if it is, and False otherwise.
// DOESNT WORK
// const ispalindrome = (given) => {
    
//     const letters = given.split('')
//     console.log(letters)
//     const newLetters = letters.reverse();
//     console.log(newLetters)

//     if(letters === newLetters){
//         return true
//     } else {
//         return false
//     }



// }
// console.log(ispalindrome("rotor"))


// Longest Word Finder: Create a function that takes a sentence as input and returns the longest word in the sentence.
// 
const wordFind =(sentence) =>{
    let words = sentence.split(" ")
    let longestWord = ""
    for (let i=0; i< words.length; i++){
        if ( words[i].length > longestWord.length ){ 
            longestWord= words[i]
}
    }
    console.log (longestWord)
}
wordFind ("whats the longest word in this sentence")