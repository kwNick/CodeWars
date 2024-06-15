function reverseLetter(str) {
    return str.replaceAll(/[\W_]|[0-9]/g, "").split("").reverse().join("");
}

reverseLetter_2 = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');
