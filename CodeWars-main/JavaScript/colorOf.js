function colorOf(r, g, b) {
    return `#${r < 16 ? '0' + r.toString(16) : r.toString(16)}${g < 16 ? '0' + g.toString(16) : g.toString(16)}${b < 16 ? '0' + b.toString(16) : b.toString(16)}`
}
