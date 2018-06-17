function travelPlans(input) {
    function isSpecialized(profession) {
        if (profession === "Programming" || profession === "Hardware maintenance"
            || profession === "Cooking" || profession === "Translating" || profession === "Designing") return true;
        else return false;
    }

    function isAverage(profession) {
        if (profession === "Driving" || profession === "Managing" || profession === "Fishing" || profession === "Gardening") return true;
        else return false;
    }

    function isClumsy(profession) {
        if (profession === "Singing" || profession === "Accounting"
            || profession === "Teaching" || profession === "Exam-Making" || profession === "Acting"
            || profession === "Writing" || profession === "Lecturing" || profession === "Modeling" || profession === "Nursing"
        ) return true;
        else return false;
    }

    let clumsyCounter = 0;
    let specializedCounter = 0;
    let totalGold = 0;
    for (let line of input) {

        let [profession, amount] = line.split(" : ");
        amount = Number(amount);
        if (isClumsy(profession)) {
            clumsyCounter++;
            if (clumsyCounter % 2 === 0) {
                amount *= 0.95;
            }
            else if (clumsyCounter % 3 === 0) {
                amount *= 0.9;
            }
        }

        if (isSpecialized(profession)) {
            if (amount > 200) {
                specializedCounter++;
                amount *= 0.8;
                if (specializedCounter % 2 === 0) {
                    amount += 200;
                }
            } else {
                amount = 0;
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