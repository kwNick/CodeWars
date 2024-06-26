function minValue(values) {
    return +(Array.from(new Set(values)).sort().join(''));
}

const minValue_1 = (v) => +[...new Set(v)].sort().join``
