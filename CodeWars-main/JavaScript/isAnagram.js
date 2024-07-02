// write the function isAnagram
var isAnagram = function (test, original) {
    return JSON.stringify(test.toLowerCase().split('').sort()) == JSON.stringify(original.toLowerCase().split('').sort());
};
