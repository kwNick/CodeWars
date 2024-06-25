function isIsogram(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = str.length - 1; j > i; j--) {
            if (str[i].toLowerCase() === str[j].toLowerCase())
                return false;
        }
    }
    return true;
}

function isIsogram_1(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram_2(str) {
    return !/(\w).*\1/i.test(str)
}

function isIsogram_3(str) {
    return !str.match(/([a-z]).*\1/i);
}