//Given a random non-negative number, you have to return the digits of this number within an array in reverse order
function digitize(n) {
    return String(n).split("").reverse().map(Number);
  }



  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }




  function digitize(n) {
    var initialArray = (""+n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }
  