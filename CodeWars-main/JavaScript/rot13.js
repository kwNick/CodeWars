//Create a function that takes a string and returns the string ciphered with Rot13. 
//If there are numbers or special characters included in the string, they should be returned as they are. 
//Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    return message.split('').map((x) => x.match(/[a-z]/i) ? x.charCodeAt(0) < 97 ? x.charCodeAt(0) > 77 ? x = String.fromCharCode((x.charCodeAt(0)-13)) : String.fromCharCode(x.charCodeAt(0)+13) : x.charCodeAt(0) > 109 ? String.fromCharCode(x.charCodeAt(0)-13) : String.fromCharCode(x.charCodeAt(0)+13) : x).join('');
  }


  //another good one
  const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
