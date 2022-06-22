let num1 = parseFloat(prompt("Enter First Number :"));
let operator = prompt("Enter an operator from the list: +,-,*,/ :");
let num2 = parseFloat(prompt("Enter second Number :"));


if(operator == "+"){
    alert(num1 + num2);
}
else if(operator == "-"){
    alert(num1 - num2);
}
else if(operator == "*"){
    alert(num1 * num2);
}
else if(operator == "/"){
    alert(num1 / num2);
}
else{
    alert("Invalid Input!");
}