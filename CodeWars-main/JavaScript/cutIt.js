function cutIt(arr) {
    const length = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, length));

}