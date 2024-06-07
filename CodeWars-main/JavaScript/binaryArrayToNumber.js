const binaryArrayToNumber = arr => {
    return arr.reduce((acc, curr, idx, arr) => curr ? acc += Math.pow(2, Math.abs(idx - (arr.length - 1))) : acc += 0, 0);
};

const binaryArrayToNumber_2 = arr => parseInt(arr.join(''), 2);

function binaryArrayToNumber_3(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}