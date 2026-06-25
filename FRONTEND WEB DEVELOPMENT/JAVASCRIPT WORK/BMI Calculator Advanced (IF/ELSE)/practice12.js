function bmiCalculatorAdvance(weight, height) {
  var BMI = weight / Math.pow(height, 2);
  var interpretation;
  if (BMI < 18.5) {
    interpretation = "Your BMI is " + BMI + ", so you are underweight.";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    interpretation = "Your BMI is " + BMI + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + BMI + ", so you are overweight.";
  }
  return interpretation;
}
console.log(bmiCalculatorAdvance(65, 1.8));
