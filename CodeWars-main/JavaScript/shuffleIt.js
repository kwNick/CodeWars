function shuffleIt(arr, ...p) {
    p.forEach(([a, b], idx) => [arr[a], arr[b]] = [arr[b], arr[a]]);
    return arr;
}