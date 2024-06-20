function fiveLine(s) {
    let str = '';
    [...Array(6)].map((_, i) => [...Array(i)].map((_, idx, arr) => str += s.trim() + (idx == arr.length - 1 && arr.length != 5 ? '\n' : '')));
    return str;
}