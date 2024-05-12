
 /***********************************
 * Part 3: Thinking Critically
 ************************************/

 let methodArray =
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

 console.log(`****************************************`)
 console.log(`***   Part 3: Thinking Criticaly     ***`)
 console.log(`****************************************`) 

 console.log(`****************************************`)
 console.log(`**  Incrementing Age the same Object  **`)
 console.log(`****************************************`) 

 methodArray.map(person=>(person.age++))

console.log(methodArray)
console.log(`****************************************`) 



console.log(`****************************************`)
console.log(`**  Incrementing Age in a new Object  **`)
console.log(`****************************************`) 

const newArray = methodArray.map(person=>({
  id:person.id,
  name:person.name,
  job:person.occupation,
  age:parseInt(person.age)+1
}))

console.log(newArray)
console.log(`****************************************`) 

let addData =
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

console.log(`****************************************`)
console.log(`**           Adding age and date      **`)
console.log(`****************************************`) 

addData.map(function(person){
 
   if(typeof(person.age)!='undefined'){
     person.age++
   }
   else{
    person.age=0
   }

   person.updated_at=new Date()

})

console.log(addData)
console.log(`****************************************`) 


// console.log(`****************************************`)
// console.log(`**  Incrementing Age in a new Object  **`)
// console.log(`****************************************`) 


 const newAddData = structuredClone(addData)
 newAddData.map(function(person){
 
  if(typeof(person.age)!='undefined'){
    person.age++
  }
  else{
   person.age=0
  }

  if(typeof(person.age)=='undefined'){
    person.updated_at=new Date()
   }
  //person.updated_at= new Date("October 13, 2014 11:13:00")
})


 console.log(newAddData)


