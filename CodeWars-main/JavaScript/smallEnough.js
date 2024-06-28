function smallEnough(a, limit) {
    return a.filter(x => x <= limit).length === a.length;
}

function smallEnough_1(a, limit) {
    return Math.max(...a) <= limit
}