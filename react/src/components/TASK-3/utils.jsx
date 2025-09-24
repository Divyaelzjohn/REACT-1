// export function getImageUrl(imageId, size='s'){
// return(
//   'https://i.imgur.com/'+imageId+size+'.jpg'
// )}


export function getImageUrl(person, size){
  return(
    'https://i.imgur.com/'+person.imageId+size+'.jpg'
 )}


// var-> function-scoped , can be redeclared hoisted . let -> Blocked, cannot be redeclared, can be updated. const -> Blocked, cannot be redeclared or updated.
// Data typed in JS? ->Primitive: String, Number, Boolean, Null, Symbol, BigInt
// Non-primitive: Objects, Arrays, Functions 

// Hoisting-> In JS, declarations are moved to the top of scope before execution.

// What is hoisted? In JS, declarations are moved to the top of scope before execution. 
// == -> Checks only value
// === ->Checks both value and type(strict equality)

// undefined ->Variables declaared but not assigned a value
// null -> Intentional empty value

// What is a closure? -> A function that remembers variables from its outer scope , even after the outer function has finished. 

// Function Declaration -> Can be hoisted
/* function add(a,b){return a+b} */
// Function Expression -> Stored in a variable, not hoisted.
/* const add2=function(a,b){return a+b;} */


