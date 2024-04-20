/**
 * Reusable Functions
 */

/**
 * Exercise No. 1
 */

console.log(`**************************************`)
console.log(`***  Part 1: Thinking Functionally ***`)
console.log(`**************************************`)
console.log(``)

/***************************************************
 * Sum Array Function
 * Take an array of numbers and return the sum.
 * Return 0 if is not an array
 * return the sum all of the items if are numbers
 ***************************************************/

function sumArray(arraytoSum){
  //validateif it is recieving an array
  if(Array.isArray(arraytoSum)){
    let sumArray=0
    //Check the entire array
    for(i=0;i<arraytoSum.length;i++){
      //check if the type of the element is a number
      if(typeof(arraytoSum[i])==='number'){
        sumArray+=arraytoSum[i]
      }
    }
    return sumArray
  }   
  return 0
}


/******************************************************
 * Average Array Function
 * Return 0 if is not an array
 * return the average of all the items if are numbers
 * if not it counts with value 0
 ******************************************************/

function averageArray(arraytoAverage){
  //variable to contain the average
  let averageArray=0
  //averageArray uses the sumArrayFunction to nor repeat code
  averageArray=sumArray(arraytoAverage)
  //if averageArray is different from 0 (is an array with numbers)
  if(averageArray){
    averageArray=averageArray/arraytoAverage.length
  }
  return averageArray
}
/*****************************************************/


/**********************************************************
 * Return Largest String Function 
 * Take an array of strings and return the longest string.
 * If is not an array or not are strings returns 0
 **********************************************************/

function largestString(arrayofStrings){
  //check that the argument sended is an array
  if(Array.isArray(arrayofStrings)){
    //variable to store the length of the string
    let largestStringLength=0
    //variable to save the string
    let largestString=''
    //iterate the array
    for(i=0;i<arrayofStrings.length;i++)
    { //compares if the lenght of the element iterated is 
      //a string and is larger then the antecesors
      //if both conditions are true.  Change the largest 
      //String Length and add the string at the return
      //variable
      if(arrayofStrings[i].length>largestStringLength && typeof(arrayofStrings[i])==="string"){
        largestString=arrayofStrings[i]
        largestStringLength=arrayofStrings[i].length
      }
    }

    return largestString

  }
  return ''
}
/*****************************************************/

/*******************************************************
 * Return Strings Greaters than X Function
 * Take an array of strings and a number and return 
 * the strings larger of the number.
 * If is not an array or not are strings returns 
 * an empty array
 * 
 *******************************************************/

function stringsGreaterthanX(arrayofStrings,x){
  //Check if it is an array
  if(Array.isArray(arrayofStrings)){
    //if x is not a number return the complete array
    if(typeof(x)==='number'){
      // Iterate all the array and if the length 
      // is <= to x eliminate that string.
      for(i=0;i<arrayofStrings.length;i++){
        if(arrayofStrings[i].length<=x){
          arrayofStrings.splice(i, 1)
        }
      }
      return arrayofStrings

    }
    return arrayofStrings
  }
  return []
}
/*****************************************************/

/*******************************************************************
 * Recursive Print Function
 * Calls itself if the number is greater then 1 and send the number-1
 * Until it is 1 in this case only print
 *******************************************************************/
function printNumberRecursive(myNumber){
  if(myNumber>1){
    printNumberRecursive(myNumber-1)
    console.log(myNumber)
  }
  else{
    console.log(myNumber)
  }
}

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


 /***********************************
 * Part 3: Thinking Critically
 ************************************/

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


