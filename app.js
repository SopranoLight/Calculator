



let inputHeight = document.querySelector('#height');
let inputWeight = document.querySelector('#weight');
let inputAll = document.querySelectorAll('.type__text');


function t1(){
    
    let blockOne = document.querySelector('.blockOne');
    let blockTwo = document.querySelector('.blockTwo');
    blockOne.style.display = 'none';
    blockTwo.style.display = 'flex';
    let height = +inputHeight.value;
    let weight = +inputWeight.value;
    valid(height, weight, );
}

function valid(height, weight){
    let result = document.querySelector('.result__weight');
    if (isNaN(height) || isNaN(weight)) {   
        result.textContent = 'Not a number';
    }
    else{
        calculator(height, weight, result);
    }
}

function calculator(height, weight, result){
    let resultText = document.querySelector('.result__text');  
    let formattedHeight = insertDot(height.toString(), 1);
    let bmi = weight / (formattedHeight * formattedHeight);
    result.textContent = bmi.toFixed(2); 
    resultText.textContent = `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${weight - 10}kgs - ${weight + 5}kgs.`
}

function insertDot(str, index) {
    return str.slice(0, index) + '.' + str.slice(index);
  }

for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].onchange = t1;
}

