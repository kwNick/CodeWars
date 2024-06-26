function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
        Math.log(desired / principal) /
        Math.log(1 + interest * (1 - tax))
    );
}

function calculateYears_1(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}