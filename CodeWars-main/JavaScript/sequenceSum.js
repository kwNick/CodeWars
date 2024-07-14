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