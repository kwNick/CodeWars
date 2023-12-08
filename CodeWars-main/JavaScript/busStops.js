//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
//they are probably sleeping there :D
var number = function(busStops){
    return busStops.reduce((acc, cur) => acc+cur[0]-cur[1], 0);
  }

//cur=[on,off] , one-liner
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);