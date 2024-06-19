function alienLanguage(str) {
    return str.split(" ").map(x => x.replace(x, x.slice(0, x.length - 1).toUpperCase() + x[x.length - 1].toLowerCase())).join(' ');
}

function alienLanguage_1(str) {
    return str.replace(/\w+/g, w => w.slice(0, -1).toUpperCase() + w.slice(-1).toLowerCase());
}