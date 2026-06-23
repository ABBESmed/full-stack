// BMI (body mass index) is a measure of body fat based on height and weight that applies to adult men and women.

function bodyMassIndex(height, weight) {
  return weight / height ** 2;
}

var bmi = bodyMassIndex(1.8, 65);
console.log(Math.floor(bmi));
