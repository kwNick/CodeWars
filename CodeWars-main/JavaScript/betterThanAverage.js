//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, cur) => acc+cur, 0)/classPoints.length;
  }
  