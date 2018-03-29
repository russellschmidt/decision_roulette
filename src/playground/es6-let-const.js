var nameVar = 'Andrew'
var nameVar = 234234
console.log('nameVar', nameVar)

let nameLet = 'Andrew'
nameLet = 1231243
console.log('nameLet', nameLet)

const nameConst = 'diarrhea'
console.log('nameConst', nameConst)

function getPetName () {
  var petName = 'hallie'
  return petName
}

console.log(getPetName())

function getPetName2 () {
  const petName = 'Doodle'
  return petName
}

console.log(getPetName())

const petName = getPetName2()

console.log(petName) // works

// Block scoping

var fullName = 'Razz Schmizz'
if (fullName) {
  var firstName = fullName.split(' ')[0]
  console.log('firstName:', firstName)
}
console.log(firstName)

const fullName2 = 'Razzo Schmeezz'
if (fullName2) {
  const firstName2 = fullName2.split(' ')[0]
  console.log('firstName2:', firstName2)
}

const fullName3 = 'Ruzzy Schmeezz'
let firstname3 = ''
if (fullName3) {
  firstname3 = fullName3.split(' ')[0]
  console.log('firstName3:', firstname3)
}
console.log('fn3:', firstname3)
