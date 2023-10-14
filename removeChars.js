//removes the first and last characters of an inputed string
function removeChar(str){
 return str.substring(1, str.length-1);
};

function removeChar_2(str) {
  return str.slice(1, -1);
}
