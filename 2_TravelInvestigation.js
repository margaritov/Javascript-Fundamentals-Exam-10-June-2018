function travelInvestigation(input) {
    function checkAllComapanies(sentence, comapanies) {
        for (let company of comapanies) {
            if (sentence.indexOf(company)===-1) {
                return false;
            }
        }
        return true;
    }

    let delimeter = input[1];
    let companies = input[0].split(delimeter);
    let validSentences = [];
    let invalidSentences = [];
    let validCounter=0;
    let invalidCounter=0;
    for (let i = 2; i < input.length; i++) {
        let sentence = input[i].toLowerCase();
        if (checkAllComapanies(sentence, companies)) {
            validCounter++;
            validSentences.push(validCounter+'. '+sentence)
        }
        else
         {
            invalidCounter++;
            invalidSentences.push(invalidCounter+'. '+sentence)
        }
    }

    if (validSentences.length > 0) {
        console.log("ValidSentences");
        console.log(validSentences.join('\n'));
    }

    if (invalidSentences.length > 0) {
        if (validCounter>0) console.log('='.repeat(30));
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