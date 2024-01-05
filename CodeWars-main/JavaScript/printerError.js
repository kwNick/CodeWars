//write a function printer_error which given a string will return the error
//rate of the printer as a string representing a rational whose numerator is
//the number of errors and the denominator the length of the control string.
function printerError(s){
    var track = 0;
    for(var j = 0; j < s.length; j++){
        if(s.charCodeAt(j) > 109){
            track++;
        }
    }
    return `${track}/${s.length}`;
}


const printError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`; // oneliner using length of result of regex replace array