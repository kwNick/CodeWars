//Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.
//Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
//In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
//Input range : 1 <= n < 4000
//In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
class RomanNumerals {
  static toRoman(num) {
    const syms = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
    const arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var res = '';
    var item;
    for(item of arr){
      var div = num/item;
      var rem = num%item;
      if(Math.floor(div) > 0){
        for(var b = 0; b < Math.floor(div); b++){
          res += syms[item];
        }
      }
      num = rem;
    }
    return res;
  }

  static fromRoman(str) {
    //how can i make this local
    const syms = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    var sum = 0;
    for(var a = 0; a < str.length; a++){
      if(str.substring(a, a+2) in syms){
        sum += syms[str.substring(a, a+2)];
        a+=1;
      }else{
        sum += syms[str.substring(a, a+1)];
      }
    }
    return sum;
  }
}


const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals_1 {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
              num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}