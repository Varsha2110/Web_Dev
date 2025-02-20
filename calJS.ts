let num1=parseFloat(prompt('Enter First Number:'));
let num2=parseFloat(prompt('Enter Second Number:'));
let operator=prompt('Enter the operator:');
let Answer;
if(operator=='+'){
    Answer=num1+num2;
}
else if(operator=='-'){
    Answer=num1-num2;
}
else if(operator=='*'){
    Answer=num1*num2;
}
else{
    Answer=num1/num2;
}
console.log(Answer);