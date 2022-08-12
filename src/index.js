const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let tens = [];

    for (let i = 0; i < expr.length; i += 10) {
        tens.push(expr.substring(i, i + 10));
    }

    tens.forEach((item, idx) => {
        let res = '';

        for (let i = 0; i < item.length; i += 2) {
            let unit = item.slice(i, i + 2);

            if (unit === '10') {
                res +='.';
            }
            if (unit === '11') {
                res += '-'
            }
            if (unit === '**') {
                res += ' ';
            }
        }

        tens[idx] = MORSE_TABLE[res];
    });

    return tens.reduce((acc, curr) => {
        if (typeof curr === 'string') {
            acc += curr
        } else {
            acc += ' '
        }
        return acc;
    }, '');
}

module.exports = {
    decode
}