function sumDigits(number) {
    let newNumber = Math.abs(number);
    let digit = 0;
    while (newNumber > 0) {
        digit += newNumber % 10;
        newNumber = Math.floor(newNumber / 10);
    }
    return digit;
}