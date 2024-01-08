//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative intege
var countSheep = function (num){
    var res = '';
    for(var j = 1; j < num+1; j++){
      res += j+" sheep...";
    }
    return res;
  }


  //countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``