//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    return l.filter((x) => typeof x  !== 'string')
  }

//   return l.filter(e => Number.isInteger(e));