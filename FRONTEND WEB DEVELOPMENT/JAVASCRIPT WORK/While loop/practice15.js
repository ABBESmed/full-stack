var i = 99;

while (i >= 0) {
  if (i >= 2) {
    var j = i - 1;
    console.log(
      i +
        " bottles of beer on the wall, " +
        i +
        " bottles of beer Take one down and pass it around, " +
        j +
        " bottles of beer on the wall",
    );
  } else if (i === 1) {
    console.log(
      i +
        " bottle of beer on the wall, " +
        i +
        " bottle of beer Take one down and pass it around, no more bottles of beer on the wall",
    );
  } else if (i === 0) {
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall",
    );
  }
  i--;
}
