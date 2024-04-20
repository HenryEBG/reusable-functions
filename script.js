/**
 * Reusable Functions
 */

/**
 * Exercise No. 1
 */

console.log(`**************************************`)
console.log(`***  Part 1: Thinking Functionally ***`)
console.log(`**************************************`)

/**
 * Sum Array Function
 * Return 0 if is not an array
 * return the sum all of the items if are numbers
 */

function sumArray(arraytoSum){
  //validate we are recieving an array
  if(Array.isArray(arraytoSum)){
    let sumArray=0
    //validate we are getting only numbers
    for(i=0;i<arraytoSum.length;i++){
      if(typeof(arraytoSum[i])==='number'){
        sumArray+=arraytoSum[i]
      }
    }
    return sumArray
  }   
  return 0
}


/**
 * Average Array Function
 * Return 0 if is not an array
 * return the average of all the items if are numbers
 * if not it counts with value 0
 */

function averageArray(arraytoAverage){
  let averageArray=0
  averageArray=sumArray(arraytoAverage)
  if(averageArray){
    averageArray=averageArray/arraytoAverage.length
  }
  return averageArray
}

/**
 * Take an array of strings and return the longest string.
 * If is not an array or not are strings returns 0
 */

function largestString(arrayofStrings){
  if(Array.isArray(arrayofStrings)){
    let largestStringLength=0
    let largestString=''
    for(i=0;i<arrayofStrings.length;i++)
    {
      if(arrayofStrings[i].length>largestStringLength && typeof(arrayofStrings[i])==="string"){
        largestString=arrayofStrings[i]
        largestStringLength=arrayofStrings[i].length
      }
    }

    return largestString

  }
  return ''
}


/**
 * Take an array of strings and a number and return the strings longer of the number.
 * If is not an array or not are strings returns 0
 */

function stringsGreaterthanX(arrayofStrings,x){
  if(Array.isArray(arrayofStrings)){
    if(typeof(x)==='number'){
      for(i=0;i<arrayofStrings.length;i++){
        if(arrayofStrings[i].length<=x){
          arrayofStrings.splice(i, 1)
        }
      }
      return arrayofStrings

    }
    return arrayofStrings
  }
  return ''
}


function printNumberRecursive(myNumber){
  if(myNumber>1){
    printNumberRecursive(myNumber-1)
    console.log(myNumber)
  }
  else{
    console.log(myNumber)
  }
}


let arraycito=['32','23433','2222']
console.log(sumArray(arraycito))
console.log(averageArray(arraycito))
console.log(largestString(arraycito))
console.log(stringsGreaterthanX(arraycito,4))
printNumberRecursive(100)


/**
 * Part 2: Thinking Methodology
 */

console.log(`**************************************`)
console.log(`***  Part 2:  Thinking Methodology ***`)
console.log(`**************************************`)

let methodArray =
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
 //console.log(methodArray)

 
 methodArray.sort(compareAges)

 function compareAges(a,b){
    return a.age-b.age
 }

 console.log(methodArray)


 /**
 * Part 3: Thinking Methodology
 */


