function travelPlans(input) {

    function isSpecialized(profession) { // return true if profession is "specialised"
        if (profession === "Programming" || profession === "Hardware maintenance"
            || profession === "Cooking" || profession === "Translating" || profession === "Designing") return true;
        else return false;
    }

    function isAverage(profession) { // return true if profession is "average"
        if (profession === "Driving" || profession === "Managing" || profession === "Fishing" || profession === "Gardening") return true;
        else return false;
    }

    function isClumsy(profession) { // return true if profession is "clumsy"
        if (profession === "Singing" || profession === "Accounting"
            || profession === "Teaching" || profession === "Exam-Making" || profession === "Acting"
            || profession === "Writing" || profession === "Lecturing" || profession === "Modeling" || profession === "Nursing"
        ) return true;
        else return false;
    }

    let clumsyCounter = 0; // clumsy professions customers counter
    let specializedCounter = 0; // special professions customers counter
    let totalGold = 0;

    for (let line of input) { // process each customer
        let [profession, amount] = line.split(" : "); // split input string to profession and amount
        amount = Number(amount); // parse amount no number
        if (isClumsy(profession)) { // is profession "clumsy"?
            clumsyCounter++; //increase "clumsy" profession customers counter
            if (clumsyCounter % 2 === 0) {
                amount *= 0.95; // every second customer pays 5% less
            }
            else if (clumsyCounter % 3 === 0) {
                amount *= 0.9; // every third customer pays 10% less
            }
        }

        if (isSpecialized(profession)) { // specialized?
            if (amount > 200) { // only work for minimum 200 gold in specialized professions
                specializedCounter++; //increment specialized counter
                amount *= 0.8; //decrease income with 20% spent for candies
                if (specializedCounter % 2 === 0) { // is it second customer?
                    amount += 200;  // 200 gold tip from every second customer of specialized professions
                }
            } else {
                amount = 0; // less than 200 gold offered - no work
            }
        }
        totalGold += amount
    }
    console.log(`Final sum: ${totalGold.toFixed(2)}`);

    if (totalGold < 1000) {
        console.log(`Mariyka need to earn ${(1000 - totalGold).toFixed(2)} gold more to continue in the next task.`);
    }
    else if (totalGold > 1000) {
        console.log(`Mariyka earned ${(totalGold - 1000).toFixed(2)} gold more.`);
    }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])