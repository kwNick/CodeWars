
function howManySmaller(arr, n) {
    return arr.map((x) => x.toFixed(2)).reduce((acc, cur) => acc + (cur < n ? 1 : 0), 0);
}

function howManySmaller_1(arr, n) {
    return arr.filter(x => +x.toFixed(2) < n).length;
}