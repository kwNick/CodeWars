//Write a function that given a floor in the american system returns the floor in the european system.
function getRealFloor(n) {
    return n < 1 ? n : n < 13 ? n-1 : n-2 ;
  }