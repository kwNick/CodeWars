//Write a function that takes an array of numbers 
//(integers for the tests) and a target number. It should 
//find two different items in the array that, when added together,
//give the target value. The indices of these items should then be 
//returned in a tuple / list (depending on your language) like so: (index1, index2)
function twoSum(numbers, target) {
    for(var j = 0; j < numbers.length; j++){
        for(var k = 0; k < numbers.length; k++){
          if(j === k){
            continue;
          }
          if(numbers[j]+numbers[k] === target){
            return [j, k];
          }
        }
    }
  }


  //iterating from i+1 on the nested loop makes it nlog(n) instead of n^2
  function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}