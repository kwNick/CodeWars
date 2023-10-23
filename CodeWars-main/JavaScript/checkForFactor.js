//return true if 'factor' is a factor of 'base' 
function checkForFactor (base, factor) {
  return base % factor === 0;
}

const checkForFactor = (base, factor) => !(base % factor);