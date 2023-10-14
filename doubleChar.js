//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  var result = "";
  for(var a = 0; a < str.length; a++){
    result += str[a]+str[a];
  }
  return result;
}

const doubleChar = (str) => str.split("").map(c => c + c).join("");
