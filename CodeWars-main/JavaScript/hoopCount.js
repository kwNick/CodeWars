//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
function hoopCount (n) {
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

//onliner
const hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
