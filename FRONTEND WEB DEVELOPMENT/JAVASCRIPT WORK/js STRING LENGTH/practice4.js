var firstName = "Mohammed";
console.log(firstName.length);

var characterWritten = prompt("write something: ");
var maxCharacters = 20;
var characterLeft = maxCharacters - characterWritten.length;
alert(
  "you have written: " +
    characterWritten.length +
    " characters, " +
    characterLeft +
    " characters left",
);
