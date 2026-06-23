var firstName = "Mohammed Zoheir";
firstName.toUpperCase();
console.log(firstName.toUpperCase());

var prenom = "NASSIBA";
var majTomin = prenom.toLowerCase();
console.log(majTomin);

var Name = prompt("what is your fullname?");
var maj1Chara = Name.slice(0, 1);
var fullName = maj1Chara.toUpperCase();
var minRestofchara = Name.slice(1, Name.length);
alert("Your fullname is: " + fullName + minRestofchara.toLowerCase());
