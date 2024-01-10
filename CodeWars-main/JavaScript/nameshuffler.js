//Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str){
    return str.replace(/(\w+) (.*)/i, "$2 $1")
}

function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }