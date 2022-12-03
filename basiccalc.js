console.log("Calculator");

//first number 
let num1 = 8;

//second number
let num2 = 6;

//operation if sum
let operation = ('*'); {

  
function addition(num1 ,num2) {
   return num1 + num2;
}

function multiplication(num1 ,num2) {
   return num1 * num2;
}

function subtraction(num1 ,num2) {
   return num1 - num2;
}
   
function division(num1 ,num2) {
   return num1 / num2;
}

function square(num1 ,num2) {
   return num1 * num2;
}

switch (operation){
    case '+':
     result = num1 + num2;
     console.log(`${num1} + ${num2} = ${result}`);
     break;

     case '-':
     result = num1 - num2;
     console.log(`${num1} - ${num2} = ${result}`);
     break;

     case '*':
     result = num1 * num2;
     console.log(`${num1} * ${num2} = ${result}`);
     break;

     case '/':
     result = num1 / num2;
     console.log(`${num1} / ${num2} = ${result}`);
     break;
 
};
};


console.log(result);







