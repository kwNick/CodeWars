function correct(string) {
    return string.replaceAll("0", "O").replaceAll("5", "S").replaceAll("1", "I");
}


const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
};

const correct_1 = string => (
    string.replace(/[501]/g, character => corrections[character])
);                          //If it's a function, it will be invoked for every match and its return value is used as the replacement text. The arguments supplied to this function are described in the Specifying a function as the replacement section below.