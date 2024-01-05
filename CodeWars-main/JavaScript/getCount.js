//Return the number of vowels in the given string.
function getCount(str) {
    return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length: 0;
  }


  //cleaner
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }