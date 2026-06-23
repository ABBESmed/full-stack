// here i created a function but it will not work until i call it
function greeting() {
  alert("Hello");
  prompt("how are you?");
  alert("Nice to hear that");
}
// now we call it
greeting();

function nbOfbottles(cost) {
  var bottles = cost / 1.5;
  console.log(Math.floor(bottles));
}
nbOfbottles(5);

// creating a function that tells us how many days, weeks and months we have lived.
function alreadyLived(age) {
  var z = (age * 12) / 1; // z for months
  var y = (z * 4) / 1; // y for weeks
  var x = (z * 30) / 1; // x for days
  console.log("You have: " + x + " days, " + y + " weeks, " + z + " months.");
}
alreadyLived(28);

function leftUntil90(Age) {
  var yearsRemaining = 90 - Age;
  var X = yearsRemaining * 365;
  var Y = yearsRemaining * 52;
  var Z = yearsRemaining * 12;
  console.log(
    "You have: " + X + " days, " + Y + " weeks, and " + Z + " months left.",
  );
}
leftUntil90(28);

// Function with outputs and return values
function iceCream(money) {
  return money % 3.99;
}
var change = iceCream(10);
console.log("Your change is: " + Math.floor(change));
