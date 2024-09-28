let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("bmiValue");
let category = document.getElementById("bmiCategory");

let userHeight = 0,
  userWeight = 0,
  userResult = 0;

function changeCategory(userResult) {
  let bmi = parseFloat(userResult);
  let bmiCategory = "";
  let color = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
    color = "blue";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal";
    color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
    color = "orange";
  } else if (bmi >= 30) {
    bmiCategory = "Obesity";
    color = "red";
  }

  category.innerHTML = bmiCategory;
  category.style.backgroundColor = color;
}

button.addEventListener("click", () => {
  userHeight = height.value * 0.01;
  userWeight = weight.value;

  userResult = (userWeight / userHeight ** 2).toFixed(2);

  result.innerHTML = userResult;
  changeCategory(userResult);
});
