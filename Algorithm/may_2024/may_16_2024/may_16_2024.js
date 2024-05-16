/* 
Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.
*/

let currentPotency = 1;
const sevenishList = [1];

function getSevenishNumber(num){
    if(num <= 0){
        console.error("Number needs to be higher than 0");
        return undefined;
    }
    return populateSevenishList(num)
}

function populateSevenishList(num){
	if(sevenishList.length === num){
  	return sevenishList[num-1];
  	}
  	sevenishList.push(7 ** currentPotency);
  	addExtras(0, num);
    currentPotency++;
    return populateSevenishList(num);
}

function addExtras(potencyToAdd, num){
    if(potencyToAdd === currentPotency || sevenishList.length === num){
    	 return;
    }
    sevenishList.push((7 ** currentPotency) + (7 ** potencyToAdd));
    potencyToAdd++;
    return addExtras(potencyToAdd, num); 
}

console.log(getSevenishNumber(7));
console.log(sevenishList);
