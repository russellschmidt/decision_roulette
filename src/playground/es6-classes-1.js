class Person {
  constructor(name, age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting () {
    return `Hey there ${this.name}.`
  }

  getDescription () {
    return `${this.name} is ${this.age} years old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  sayStudentStuff () {
    console.log(`hurr durr you a dumbo `+ this.name)
  }
  hasMajor () {
    return !!(this.major)
  }
  getDescription () {
    let description = super.getDescription()
    if (this.hasMajor ()) {
      description += ` Their major is ${this.major}.`
    }

    return description
  }
}

class Traveler extends Person {
  constructor (name, age, location) {
    super(name, age)
    this.location = location
  }

  getGreeting () {
    let getGreeting = super.getGreeting()
    if (this.location) {
      getGreeting += `I'm visiting from ${this.location}`
    }
    return getGreeting
  }
}

const meemaw = new Student ('Joe Joe', 69, 'sexology')
console.log(meemaw.getGreeting())
console.log(meemaw.getDescription())
console.log(meemaw.hasMajor())

const other = new Person ('Bob Jones', 120)
console.log(other.getGreeting())
console.log(other.getDescription())

const other2 = new Traveler ('Stank Feet', 19, 'Sextown')
console.log(other2.getGreeting())
console.log(other2.getDescription())