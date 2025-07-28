const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // take the values height and weight
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `Your BMI is ${BMI}`;

    // classify the result
    if (BMI < 0) {
      result.innerHTML = "Please enter valid height and weight.";
      result.className = "";
      return;
    }
    if (BMI < 18.5) {
      result.className = "underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
      result.className = "normal";
    } else if (BMI >= 25 && BMI < 29.9) {
      result.className = "overweight";
    } else {
      result.className = "obese";
    }
    result.innerHTML += `<br> You are classified as <span class="${result.className}">${result.className}</span>`;
  }

});
