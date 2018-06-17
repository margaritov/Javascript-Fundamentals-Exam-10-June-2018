function minkeDecode(input) {
    let startIndex = Number(input[0]); // start index of substring to be replaced in first encrypted word
    let endIndex = Number(input[1]);  // end index of substring to be replaced in first encrypted word
    let missingWord = input[2]; // substring in first encrypted word to be replaced with this string
    let encryptedText = input[3]; //encrypted text
    let patternWord = /\b[A-Z][A-za-z]+[A-Z]\b/g; // pattern to extract first encrypted word from text
    let encryptedWord = patternWord.exec(encryptedText).toString(); // apply regex pattern to extract first encrypted word
    let frontPart = encryptedWord.substr(0, startIndex); // front part of first encrypted word
    let secondPart = encryptedWord.substring(endIndex + 1); // last part of first encrypted word
    let decoded = frontPart + missingWord.toLowerCase() + secondPart.toLowerCase(); // compose decoded first word
    let numbers = encryptedText.match(/[0-9]{3}\.?[0-9]*/g); // pattern to extract all three-digit numbers (including float) from text
    let res = '';  // res will hold second word decrypted
    for (let i = 0; i < numbers.length; i++) { // iterate over three-digit numbers
        numbers[i] = Math.ceil(Number(numbers[i])); // round to floor floating point number
        let chr = String.fromCharCode(numbers[i]); // get ascii char for current number
        if (i === 0) chr = chr.toUpperCase(); // first char will be uppercase
        res += chr; // add char to second word decrypted
    }
    console.log(decoded + ' => ' + res); // print first and second decrypted word
}

minkeDecode(["3", "5", "gar",        "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
minkeDecode(["5","7","riA","BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he)"]);