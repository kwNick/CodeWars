//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
  }

  const updateLight_ = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]