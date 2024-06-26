function revrot(str, sz) {
    if (!sz || sz < 0 || sz > str.length) return '';
    var arr = str.match(new RegExp('\\d{' + sz + '}', 'g'));
    return arr.map(function (v) {
        if (v.toString().split('').reduce((s, v) => s + v * 1, 0) % 2 === 0) {
            return v.split('').reverse().join('');
        }
        else return v.slice(1) + v[0];
    }).join('');
}