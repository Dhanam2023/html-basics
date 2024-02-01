for (var i=1; i<=2; i++)
{
    console.log(i)
}
var students = ['John','Mary','Sam']
console.log('count of students : ' +students.length)

console.log(students.indexOf('Sam'))
// indexof will return -1 if item is not present
// it is used to get particular item from array
// cat is an OBJECT.It will have name, age, breed etc.
// Object - collection of key value pairs
var person = {} // empty object
person = {
    name: "John",
    age: 30,
    address: '123 MAin street'
}
console.log('Presidents\'s name is : ' +person.name)

var person2 = {
    name: "Sam",
    age: 30,
    address: '123 MAin street',
    interests:['music', 'movies', 'sports'],
    isMarried: true,
    address:{
        street: 'addi',
        city: 'tggjj',
        State: 'CA'
    }
}
console.log('Presidents\'s name is : ' +person.name)
console.log(person.name)

var Mine = {
    name: 'Dhanam',
    age: 35,
    address: {
        Street: '1, Margarita Street',
        City : 'San Diago',
        State : 'CA'
    }
}
console.log('My name is ' + Mine.name)
console.log('My City is ' + Mine.address.City )
console.log('My City is ' + Mine.address['City'] )
// Mumbai - Title case
// firstName - Camel case. It is prefered to name the object.

// function functionName() {} - Defining Function

function printName(){
    console.log('My name is Dhanam')
}
printName()

function addNumbers(x, y) {
    return x + y
}
console.log(addNumbers(100,200))

function printAnyName(name){
    console.log(name)
}
printAnyName('Vrishin')

function concatWords(word1, word2, word3) {
    return word1 + ' ' + word2 + ' ' + word3
}
console.log(concatWords('Hello', 'World', 'Dhanam'))


