function pickIt(arr) {
    var odd = [], even = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }

    return [odd, even];
}