/**
 * Part 2: Thinking Methodology
 */

console.log(`****************************************`)
console.log(`***   Part 2:  Thinking Methodology  ***`)
console.log(`****************************************`)

let methodArray =
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
 

 console.log(`****************************************`)
 console.log(`***      Order Array by Ages         ***`)
 console.log(`****************************************`) 
 //order the array by age
methodArray.sort( (a,b) => a.age-b.age)

console.log(methodArray)
console.log(`****************************************`) 
console.log(``)

console.log(`****************************************`)
console.log(`***    Filtering older than 50       ***`)
console.log(`****************************************`) 
const filterArray=methodArray.filter(a => a.age<=50)

console.log(filterArray)
console.log(`****************************************`) 
console.log(``)


//With map change the occupation with job and sum +1 to the age
const mapArray = methodArray.map(person=>({
  id:person.id,
  name:person.name,
  job:person.occupation,
  age:parseInt(person.age)+1
}))

console.log(mapArray)


//With reduce sum ages 

const sumAges = mapArray.reduce((sumAge,person) => sumAge + parseInt(person.age),0)

console.log(`The sum of the ages is : ${sumAges}`)

console.log(`The average of the ages is : ${sumAges/mapArray.length}`)
