function minkeDecode(input) {
    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let missingWord = input[2];
    let encryptedText = input[3]
    let patternWord = /\b[A-Z][A-za-z]+[A-Z]\b/g;
    let encryptedWord = patternWord.exec(encryptedText).toString();
    let frontPart = encryptedWord.substr(0, startIndex);
    let secondPart = encryptedWord.substring(endIndex + 1);
    let decoded = frontPart + missingWord.toLowerCase() + secondPart.toLowerCase();
    let numbers = encryptedText.match(/[0-9]{3}\.?[0-9]*/g);
    let res = '';
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.ceil(Number(numbers[i]));
        let chr = String.fromCharCode(numbers[i]);
        if (i === 0) chr = chr.toUpperCase();
        res += chr;
    }
    console.log(decoded + ' => ' + res);
}

minkeDecode(["3", "5", "gar",        "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
minkeDecode(["5","7","riA","BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he)"]);