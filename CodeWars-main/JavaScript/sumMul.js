function sumMul(n, m) {
    //your idea here
    if (n <= 0 || m <= 0) { return "INVALID"; }
    var i = 1;
    var sum = 0;
    while (i * n < m) {
        sum += i * n;
        i++;
    }
    return sum;
}