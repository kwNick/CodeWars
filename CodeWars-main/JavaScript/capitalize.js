function capitalize(s) {
    return [s.split('').map((l, i) => i % 2 == 0 ? l.toUpperCase() : l).join(''), s.split('').map((l, i) => i % 2 == 1 ? l.toUpperCase() : l).join('')];
};