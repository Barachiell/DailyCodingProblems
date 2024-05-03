/* 
Write a function, throw_dice(N, faces, total), that determines how many ways it is possible to throw N dice with some number of faces each to get a specific total.

For example, throw_dice(3, 6, 7) should equal 15.
*/

function throwDice(numOfDices, diceFaces, total){
    let possibleOutcomes = allPossibilities(numOfDices, diceFaces);

    return possibleOutcomes
        .map(outcome => outcome.reduce((sum, value) => sum + value, 0))
        .filter(element => element === total)
        .length;
}

function allPossibilities(numOfDice, numOfFaces) {
    let possibleOutcomes = [];
    function generateOutcomes(dice, currentOutcome) {
        if (dice === 0) {
            possibleOutcomes.push(currentOutcome.slice());
        } else {
            for (let face = 1; face <= numOfFaces; face++) {
                currentOutcome.push(face);
                generateOutcomes(dice - 1, currentOutcome);
                currentOutcome.pop();
            }
        }
    }
    generateOutcomes(numOfDice, []);
    return possibleOutcomes;
}

console.log(throwDice(3,6,7));