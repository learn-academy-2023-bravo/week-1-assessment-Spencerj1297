// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: The code will add indigo to the end of the array and return the number of items indexed.
// b) Verify and explain: The code did push indigo into the array and logged the total number of 5. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: The code will return the length of the string not including "" but including spaces.
// b) Verify and explain: The code returned 10 which is the total number of characters in the string including the one space.

// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer: The code will display the 4th index item in the string which is 0.
// b) Verify and explain: The code returned the 4th item from the variable greeting which was storing the string 'Hello World!'.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 //console.log(languages[index])

// a) Your answer: The code will return the 1st index item of the variable languages because of the second varibale index inside of the [].
// b) Verify and explain: The code returned the 1st index 'Ruby' from the array stored inside of languages.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: The code will return undefined because the lack of '' inside of the parentheses attached to the toUpperCase method.
// b) Verify and explain: The code gave the error 'TypeError: weekendDays.toUpperCase is not a function' because the toUpperCase method can only be used on a string. Answer found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: The code will return number because dataType.length will give the numerical value for the array and type of will show you that the numerical values dataype is a number. Not to be confused with number as the first part of the array.
// b) Verify and explain: The code gives us number verifying that the typeof method shows the data type form dataTypes.length which is a number. 