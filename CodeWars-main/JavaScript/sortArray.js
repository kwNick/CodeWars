//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {

      var indices = [];
      array.filter((v, i) => v % 2 && indices.push(i)).sort((a, b) => a-b).forEach((v, i) => array[indices[i]] = v);
      return array;
    }

function sortArray(array) {
    const check = array.filter(x => x%2).sort((a, b) => a - b);
    return array.map(x => x%2 ? check.shift() : x);
}