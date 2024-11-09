function cubeChecker(volume, side) {
    return (volume < 1 || side < 1) ? false : volume === Math.pow(side, 3);
};