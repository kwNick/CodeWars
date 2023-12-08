//Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
    return [arr.sort((a,b) => a-b)[0],arr[arr.length-1]]; // fix me!
  }

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }