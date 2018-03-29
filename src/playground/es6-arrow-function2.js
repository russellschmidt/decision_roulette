// ES5 can access arguments object that returns an array of all the arguments passed in.
// even ones that arent defined in the arguments list
const add = function (a, b) {
  console.log(arguments)
  return a + b
}

console.log(add(44, 56, 100))

// no arguments object in arrow function
const add2 = (a, b) => {
  // console.log(arguments)  // BAD BAD BAD
  return a + b
}

// console.log(add2(44, 56, 100))
// ERROR = "arguments is not defined"

// 'this' keyword - in ES5, this is scoped to a function or object - the anonymous forEach function inside the 
// other function has 'this' set = undefined and so we have to define a variable THAT = this to scope into the 
// anonymous function
const user = {
  name: 'Russ',
  cities: ['LA', 'Boston', 'NYC'],
  printPlacesLived: function () {
    const that = this
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(function(city) {
      console.log(that.name + ' has lived in ' + city)
    })
  }
}
user.printPlacesLived()

// Arrow functions inherit their parent's this context! You can ditch THAT and its also more readable
const user2 = {
  name: 'Russ',
  cities: ['LA', 'Boston', 'NYC'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    })
  }
}
user2.printPlacesLived()

// ES6 method syntax is even more brief and cool - dump the colon and the function keyword, just name(){}
const user3 = {
  name: 'Russ',
  cities: ['LA', 'Boston', 'NYC'],
  printPlacesLived() {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    })
  }
}
user3.printPlacesLived()

// MAP! returns a mutated array instead of forEach which runs a function on each element in array
const user4 = {
  name: 'Russ',
  cities: ['LA', 'Boston', 'NYC'],
  printPlacesLived() {
    return this.cities.map( city => this.name + ' has lived in ' + city )
  }
}
console.log(user4.printPlacesLived())

// challenge - take an object and return a multiplied array backs
const multiplier = {
  // numbers = array of numbers
  // multiply by = a number we multiply each array element by
  // multiply = return a new array with the multiplied numbers back
  numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(x => x * this.multiplyBy)
  }
}

console.log(multiplier.multiply())