//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result,
//what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
export default function Summation(num){
    var incr = 0;
    for(var j = 0; j < num+1; j++){
        incr += j;
    }
    return incr;
}


//oneliner clever
const sum = n => n * (n + 1) / 2;


//recursion
var summing = function f(num) {
    return num ? num + f(num-1) : 0;
  }