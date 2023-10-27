//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//The Haskell version takes a list of directions with data Direction = North | East | West | South.
//The Clojure version returns nil when the path is reduced to nothing.
//The Rust version takes a slice of enum Direction {North, East, West, South}.
function dirReduc(arr){
  var res = [];
  const ch = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'WEST': 'EAST', 'SOUTH': 'NORTH'};
  for(var a = 0; a < arr.length; a++){
    if(res.length == 0){
      res.push(arr[a]);
    }else if(ch[res[res.length-1]] == arr[a]){
      res.pop();
    }else{
      res.push(arr[a]);
    }
  }
  return res;
}


function dirReduc_1(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}