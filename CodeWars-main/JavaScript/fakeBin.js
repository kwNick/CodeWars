function fakeBin(x) {
    return x.replaceAll(/([0-4])/ig, "0").replaceAll(/([5-9])/ig, "1");
}

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}