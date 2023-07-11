let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secNum");
let operator = document.getElementById("operator");

let Caculation = document.getElementById("caculate");
let result =document.getElementById("result");
caculate.addEventListener("click",caculation);
function caculation() {
    let answer;
    let num1 = firstNumber.value;
    let  num2 = secondNumber.value;
    if(operator.value==="+"){
        answer = parseFloat(num1)+ parseFloat(num2);
    }
    else if(operator.value==="-"){
        answer =parseFloat(num1)-parseFloat(num2);
    }
    else if(operator.value==="*"){
        answer =parseFloat(num1)*parseFloat(num2);
    }
    else if(operator.value==="/"){
        answer =parseFloat(num1)/parseFloat(num2);
    }
    result.innerHTML=answer;
}