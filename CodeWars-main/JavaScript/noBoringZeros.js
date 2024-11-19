function noBoringZeros(n) {
    while (Math.abs(n) > 0) {
        if (n % 10 == 0) {
            n /= 10;
        } else {
            break;
        }
    }
    return n;
}

function noBoringZeros_stringLiteral(n) {
    return +`${n}`.replace(/0*$/, "");
}