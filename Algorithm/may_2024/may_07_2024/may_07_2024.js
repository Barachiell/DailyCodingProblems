/* 
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true. Given the string "([)]" or "((()", you should return false.
*/

const correctOpposites = {
    "(": ")",
    "{": "}",
    "[": "]",
}

function opens(value){
    return Object.keys(correctOpposites).includes(value);
}

function closes(value){
    return Object.values(correctOpposites).includes(value);
}

function checkBalance(data){
    const stack = [];
    for (let bracket of data) {
        if (opens(bracket)) {
            stack.push(bracket);
        } else if (closes(bracket)) {
            const lastOpening = stack.pop();
            if (correctOpposites[lastOpening] !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}




let testToTrue = "([])[]({})";
let testToFalse1 = "([)]";
let testToFalse2 = "((()";
console.log(checkBalance(testToTrue));
console.log(checkBalance(testToFalse1));
console.log(checkBalance(testToFalse2));