// ES5 assign anonymous function to a named variable
const square = function (x) {
  return x * x
}

console.log('square', square(8))

// es6 arrow functions are all anonymous so you have to assign
// them to a variable to use them later /refernce them
const squareArrow = (x) => {
  return x * x
}

console.log('squareArrow', squareArrow(9))

// es5 functions could be named in their definition which is also sweet as candy poo
function squareMe (x) {
  return x * x
}

console.log('squareMe', squareMe(13))

// es6 has streamlined syntax if you just have one expression that is returned
// no explicit return
const squareArrow2 = (x) => x * x

console.log('squareArrow2', squareArrow2(10))

// challenge
// pull out a first name from long name in reg arrow function and then the expression syntax

const name = "Robert Bobert"

function getName1 (n) {
  return (n) ? n.split(" ")[0] : null
} 

const getName2 = function (n) {
  return (n) ? n.split(" ")[0] : null
}

const getName3 = (n) => {
  return (n) ? n.split(" ")[0] : null
}

const getName4 = (n) => (n) ? n.split(" ")[0] : null

console.log("getName1", getName1(name))
console.log("getName2", getName2(name))
console.log("getName3", getName3(name))
console.log("getName4", getName4(name))