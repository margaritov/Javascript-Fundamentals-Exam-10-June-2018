function travelInvestigation(input) {
    function checkAllCompanies(sentence, comapanies) { // return true if sentence contains all required company names
        for (let company of comapanies) {
            if (sentence.indexOf(company) === -1) {
                return false;
            }
        }
        return true;
    }

    let delimeter = input[1];
    let companies = input[0].split(delimeter);
    let validSentences = []; // array holding valid sentences
    let invalidSentences = []; // array holding invalid sentences
    let validCounter = 0; // valid sentences counter
    let invalidCounter = 0; // invalid sentences counter
    for (let i = 2; i < input.length; i++) { // iterate all sentences
        let sentence = input[i].toLowerCase(); // convert current sentence to lowercase
        if (checkAllCompanies(sentence, companies)) { // is it valid?
            validCounter++; // increase valid sentences counter
            validSentences.push(validCounter + '. ' + sentence) // add current sentence to valid sentences array
        }
        else {  // not valid sentence
            invalidCounter++; // increase non-valid sentences counter
            invalidSentences.push(invalidCounter + '. ' + sentence) // add current sentence to invalid sentences array
        }
    }

    if (validSentences.length > 0) {
        console.log("ValidSentences");
        console.log(validSentences.join('\n'));
    }

    if (invalidSentences.length > 0) {
        if (validCounter > 0) { // are there valid sentences? - do we need separator line?
            console.log('='.repeat(30)); // print separator line - 30 times '='
        }
        console.log("InvalidSentences");
        console.log(invalidSentences.join('\n'));
    }
}

travelInvestigation(
    ["bulgariatour@, minkatrans@, koftipochivkaltd",
        "@,",
        "Mincho e koftipochivkaltd Tip 123  ve MinkaTrans BulgariaTour",
        "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
        "someone continues as no "
    ]
)