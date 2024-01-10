// you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. 
function findMultiples(integer, limit) {
    return [...Array(limit).keys()].map(x => x+1).filter(x => x%integer === 0);
}


function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }