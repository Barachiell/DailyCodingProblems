/* 
An imminent hurricane threatens the coastal town of Codeville. If at most two people can fit in a rescue boat, and the maximum weight limit for a given boat is k, determine how many boats will be needed to save everyone.

For example, given a population with weights [100, 200, 150, 80] and a boat limit of 200, the smallest number of boats required will be three.
*/

function numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);

    let left = 0;
    let right = people.length - 1;
    let boats = 0;
  
    function findBoats() {
      if (left > right){
        return;
      } 
      if (people[left] + people[right] <= limit) {
        left++;
      }
      right--;
      boats++;
      findBoats();
    }
    findBoats();
    return boats;
  }

  const weights = [100, 200, 150, 80, 200, 50, 100, 130];
  const limit = 200;
  console.log(numRescueBoats(weights, limit)); // output 6