/**
 * Reusable Functions
 */



import { sumArray,averageArray,largestString,stringsGreaterthanX,printNumberRecursive } from "./part1.js";
import './part2.js';
import './part3.js';



console.log(`**************************************`)
console.log(`***  Part 1: Thinking Functionally ***`)
console.log(`**************************************`)
console.log(``)

let myArrayOfNumbers=[27,23,58,52,36]
let myArrayOfStrings=['Hi','Hello','Good Morning']
console.log(`***********************************`)
console.log(`*****    Using SUM Function    ****`)
console.log(`***********************************`)
console.log(sumArray(myArrayOfNumbers))
console.log(`***********************************`)
console.log(``)

console.log(`***********************************`)
console.log(`****  Using AVERAGE Function   ****`)
console.log(`***********************************`)
console.log(averageArray(myArrayOfNumbers))
console.log(`***********************************`)
console.log(``)

console.log(`***********************************`)
console.log(`** Using largestString Function  **`)
console.log(`***********************************`)
console.log(largestString(myArrayOfStrings))
console.log(`***********************************`)
console.log(``)

console.log(`****************************************`)
console.log(`** Using stringGreaterThanX Function  **`)
console.log(`****************************************`)
console.log(stringsGreaterthanX(myArrayOfStrings,4))
console.log(`****************************************`)
console.log(``)

console.log(`****************************************`)
console.log(`**Using printNumberRecursive Function **`)
console.log(`****************************************`)
printNumberRecursive(5)
console.log(`****************************************`)
console.log(`****************************************`)
console.log(``)




