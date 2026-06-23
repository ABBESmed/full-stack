var firstName = "Mohammed Zoheir";
firstName.slice(2, 7);
console.log(firstName.slice(2, 7));

firstName.slice(8, 13);
console.log(firstName.slice(8, 13));

firstName.slice(0, 15);
console.log(firstName.slice(0, 15));

var firstName = "Mohammed";
console.log(firstName.length);

var characterWritten = prompt("write something: ");
var maxCharacters = 20;
var characterSlice = characterWritten.slice(0, maxCharacters);
var characterLeft = maxCharacters - characterSlice.length;
alert(
  "you have written: " +
    characterSlice.length +
    " characters, " +
    characterLeft +
    " characters left," +
    " " +
    characterSlice,
);
