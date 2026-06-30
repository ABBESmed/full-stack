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

var NAMES = ["Nassiba", "Mohammed", "Tom", "Jerry"];
function countLongerNames(NAMES) {
  var count = 0;
  if (NAMES[0].length > 5) {
    count++;
  }
  if (NAMES[1].length > 5) {
    count++;
  }
  if (NAMES[2].length > 5) {
    count++;
  }
  if (NAMES[3].length > 5) {
    count++;
  }
  return count;
}
console.log(countLongerNames(NAMES));

var numbers = [28, 33, 369];
function whoIsBigger(numbers) {
  var Biggest = numbers[0];
  if (numbers[1] > Biggest) {
    Biggest = numbers[1];
  }
  if (numbers[2] > Biggest) {
    Biggest = numbers[2];
  }
  return Biggest;
}
console.log(whoIsBigger(numbers));
