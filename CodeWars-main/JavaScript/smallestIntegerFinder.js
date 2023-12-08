//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var min = args[0];
      for(var j = 1; j < args.length; j++){
        if(args[j] < min){
          min = args[j];
        }
      }
      return min;
    }
}

//don't use toSorted
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b) => a-b)[0];
    }
  }