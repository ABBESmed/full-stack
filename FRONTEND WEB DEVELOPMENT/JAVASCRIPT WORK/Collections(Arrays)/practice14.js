var familyName = ["Mohammed zoheir", "Nassiba", "Lahouari"];
console.log(familyName[2]);
console.log(familyName.length);
console.log(familyName.includes("Mohammed zoheir"));
console.log(familyName.includes("James"));
console.log(familyName);

var fruits = ["Banana", "Strawberry", "Orange", "Apple"];
var theEnterFruit = prompt("Enter fruit name:");

if (fruits.includes(theEnterFruit)) {
  console.log("welcome");
} else {
  console.log("error");
}

var output = [];
var i = 0;
function fizzBuzz() {
  i++;
  if (i % 5 === 0 && i % 3 === 0) {
    output.push("FizzBuzz");
  } else if (i % 5 === 0) {
    output.push("Buzz");
  } else if (i % 3 === 0) {
    output.push("Fizz");
  } else {
    output.push(i);
  }
  console.log(output);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

var Names = ["Jack", "Mario", "Sarah", "Tim"];
function whoIsPaying(Names) {
  var randomIndex = Math.floor(Math.random() * Names.length);
  var thePersonPaying = Names[randomIndex];
  return thePersonPaying;
}
console.log(whoIsPaying(Names));
