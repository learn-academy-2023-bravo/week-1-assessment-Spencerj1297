// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: input:a function that has numFar parameter, and determines if that number in degrees Fahrenheit is below, above, or at its boiling point based on the argument passed.

// const temperature1 = 42
// Expected output: "42 is below boiling point"

// const temperature2 = 350
// Expected output: "350 is above boiling point"

// const temperature3 = 212
// Expected output: "212 is at boiling point"

// const waterTemp = (numFar) => {
// if (numFar > 212){
//     return('Your water is above the boiling point!')
// }
// else if (numFar === 212){
//     return ('Your water is at the boiling point.')
// }
// else if (numFar < 212){
//     return ('You need to turn up the heat!')
// }
// else {
//     return ('Check to see if your stove is lit...')
// }
// }
// console.log(waterTemp(42))  //You need to turn up the heat!
// console.log(waterTemp(350)) //Your water is above the boiling point!
// console.log(waterTemp(212)) //Your water is at the boiling point.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Take the first array and concat to the second to combine both arrays.
// Return the length of the combined new array.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const padreWorldSeries = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padreWorldSeries.length) //9

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// Pseudo code:Create variable to store methods of split, reverse, and join
// console.log that new variable

// const currentCohort = "Bravo 2023"
// const reversedString = currentCohort.split("").reverse().join("")
// console.log(reversedString) //3202 ovarB

// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Find a method that will return the last value of a given index.
// attach that method to the original array. Pass in givenValue1 and 2 to find index location.

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];

// const givenValue1 = 42;
// console.log(myNumbers.lastIndexOf(givenValue1)); //7
// // Expected output: 7

// const givenValue2 = 10;
// console.log(myNumbers.lastIndexOf(givenValue2)); //8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Take given variable and attached methods sort to place each index in order from smallest to largest.
// Attached the .reverse method to change the order of the array from largest to smallest.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// console.log(sanDiegoSummerTemperatures.sort().reverse()) //[82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
// console.log(sanDiegoWinterTemperatures.sort().reverse())//[68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
