//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
function stray(numbers) {
    return numbers[0] === numbers[1] ? numbers.find(x => x !== numbers[0]) : numbers[0] === numbers[2] ? numbers[1] : numbers[0];
  }

  const stray = nums => nums.reduce((a, b) => a ^ b);