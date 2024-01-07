//Write a function findNeedle() that takes an array full of junk but containing one "needle", return the index in a message
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(x => x === 'needle')}`;
  }