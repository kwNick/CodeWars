//Return an array, where the first element is the count of positives numbers and the second element
//is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input) {
    var count = input && input.filter(x => x > 0).length;
    var sum = input && input.filter(x => x < 0).reduce((acc, cur) => acc += cur,0);
    return !count && !sum ? [] : [count, sum];
  }