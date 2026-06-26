function isLeap(year) {
  var meaning;
  if (year % 4 !== 0) {
    meaning = year + " Not Leap.";
  } else {
    if (year % 100 === 0 && year % 400 === 0) {
      meaning = year + " leap.";
    } else if (year % 100 !== 0) {
      meaning = year + " leap.";
    } else if (year % 100 === 0 && year % 400 !== 0) {
      meaning = year + " Not Leap.";
    }
  }
  return meaning;
}
console.log(isLeap(2008));
