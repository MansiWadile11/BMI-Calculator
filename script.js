function calculateBMI() {
    let name = document.getElementById("name").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
  
    if (!name || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("result").innerHTML = "Please enter valid details!";
      return;
    }
  
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
  
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";
  
    document.getElementById("result").innerHTML =
      `${name}, your BMI is ${bmi.toFixed(2)} (${category}).`;
  }
  
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
  }
  