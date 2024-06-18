function giveMeFive(obj) {
    let arr = [];
    for (var key in obj) {
        key.length === 5 && arr.push(key);
        obj[key].length === 5 && arr.push(obj[key]);
    }
    return arr;
}