function padIt(str, n) {
    let i = 1;
    while (i <= n) {
        str = `${i % 2 == 1 ? '*' : ''}${str}${i % 2 == 0 ? '*' : ''}`
        i++;
    }
    return str;
}