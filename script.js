function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight / Math.pow((height/100), 2);
    let result = document.getElementById('result');
    let status = "";

    if (!isNaN(bmi)) {
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obesity';
        }
    } else {
        result.innerHTML = 'Please enter valid values';
    }

    result.innerHTML = `Your BMI is ${bmi.toFixed(1)} which means You are ${status}`;
}