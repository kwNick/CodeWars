const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if (begin > end)
        return 0;
    var track = begin;
    while (begin + step <= end) {
        begin += step;
        track += begin;
    }
    return track;
};
const sequenceSum_recursion = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
};