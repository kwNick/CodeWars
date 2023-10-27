//Greed is a dice game played with five six-sided dice. 
//Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
function score( dice ) {
  var count = [0,0,0,0,0,0,0];
  dice.forEach(x => count[x]++);
  return count.reduce((sum,x,idx) => (x > 2 && idx == 1) ? sum += (x*100)+700 : (x > 2 && idx == 5) ? sum += (idx*100)+((x-3)*50) : (x > 2) ? sum += idx*100 : (idx == 1) ? sum += x*100 : (idx == 5 ) ? sum += x*50 : sum += 0);
}


function score_1( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}