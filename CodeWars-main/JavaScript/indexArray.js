//Write a function which takes a list of strings and returns each line prepended by the correct number.
var number=function(array){
    return array.map((x, idx) => x = `${idx+1}: ${x}`);
  }