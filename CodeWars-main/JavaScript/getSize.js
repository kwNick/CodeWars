function getSize(width, height, depth) {
    return [(width * height + width * depth + height * depth) * 2, width * height * depth];
}
//return [surface Area of a cube, volume of a cube]