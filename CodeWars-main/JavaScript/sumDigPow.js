//The number 89. 89 is the first integer with more than one digit that fulfills the property 
//partially introduced in the title of this kata. What's the use of saying "Eureka"? Because 
//this sum gives the same number:
function sumDigPow(a, b) {
    var result = [];
    while(a <= b){
      var num = a.toString().split('');
      a === num.reduce((acc, cur, idx) => acc+Math.pow(cur,idx+1), 0) ? result.push(a++) : a++;
    }
    return result;
  }


  //una otra
  function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }