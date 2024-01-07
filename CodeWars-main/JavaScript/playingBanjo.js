//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name){
    return name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo');
}
// return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";