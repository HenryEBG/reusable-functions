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
    for(let i=0;i<arraytoSum.length;i++){
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
    for(let i=0;i<arrayofStrings.length;i++)
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
      for(let i=0;i<arrayofStrings.length;i++){
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

export {sumArray,averageArray,largestString,stringsGreaterthanX,printNumberRecursive};