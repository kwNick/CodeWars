//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
function arithmetic(a, b, operator){
    return operator === "add" ? a+b : operator === "subtract" ? a-b : operator === "divide" ? a/b : a*b;
  }
  
  function arithmetic_(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b); 
  }