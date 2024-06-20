function fiveLine(s) {
    let str = '';
    [...Array(6)].map((_, i) => [...Array(i)].map((_, idx, arr) => str += s.trim() + (idx == arr.length - 1 && arr.length != 5 ? '\n' : '')));
    return str;
}

function fiveLine_1(s) {
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}