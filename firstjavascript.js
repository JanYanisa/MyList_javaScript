console.log("Hello, This is logging from JavaScript")
var name = "JAN"
// console.log("Name: ", name)
var age = 23
// console.log("Age: ", age)
var hasComputer = true
// console.log("Has computer?: ", hasComputer)

// using backtrik
console.log(`My name is ${name} and I'm ${age} year old.`) 

// Array, should be the same type
var shoppingList = [
  "Eggs",
  "Milk",
  "Bread",
]

console.log(shoppingList)

// Object
var JanInfo = {
  name: "JAN",
  age: 23,
  hasComputer: true
}

// function
function add(a, b){
  return a+b
}

var ans = add(10, 4)
console.log("results of add(10, 4): ", ans)

var ans = add("10", "4")
console.log("results of add('10', '4'): ", ans)

// condition
var score = 59
if (score >= 80){
  console.log("Grade A")
} else if (score >= 60){
  console.log("Grade B")
}else {
  console.log("Grade C")
}

if(80 == 80){
  console.log("OK")
}else{
  console.log("Not OK")
}

if(80 == "80"){
  console.log("OK")
}else{
  console.log("Not OK")
}

if(80 === "80"){
  console.log("OK")
}else{
  console.log("Not OK")
}
// add anothor = for strictly compare

function calculate(a, b, operator){
  if (operator === "+"){
    return a+b
  }else if (operator === "-"){
    return a-b
  }else if (operator === "*"){
    return a*b
  }else if (operator === "/"){
    return a/b
  }
}

var ans02 = calculate(25,2,"/")
console.log("results of calculate(25,2,'/'): ", ans02)