function getGrade(s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3;
    return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F'
}

function getGrade_1(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length

    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
}