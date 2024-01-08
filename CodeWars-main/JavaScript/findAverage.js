//Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
    return array.reduce((acc, cur) => acc+cur,0)/(array.length || 1);
}