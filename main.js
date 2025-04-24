  function power() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers for power operation.");
        return;
    }

    let result = Math.pow((num1), (num2));
    document.getElementById('result').innerText = `The result of ${num1}^${num2} is ${result}`;
}

function round() {
    let num1 = document.getElementById('num1').value;

    if (num1 === "") {
        alert("Please enter a number to round.");
        return;
    }

    let result = Math.round((num1));
    document.getElementById('result').innerText = `The rounded value of ${num1} is ${result}`;
}

function square() {
    let num1 = document.getElementById('num1').value;

    if (num1 === "") {
        alert("Please enter a number to calculate the square root.");
        return;
    }

    let result = Math.sqrt((num1));
    document.getElementById('result').innerText = `The square root of ${num1} is ${result}`;
}

function random() {
    let result = Math.random();
    document.getElementById('result').innerText = `A random number between 0 and 1 is ${result}`;
}