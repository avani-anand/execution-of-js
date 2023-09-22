// 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting


console.log(multiplyNum(4,6));  //ReferenceError: Cannot access 'multiplyNum' before initialization


const multiplyNum=function(number1,number2)
{
    return number1 * number2;
}

















