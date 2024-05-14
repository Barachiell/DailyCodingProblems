/* 
You are given an array representing the heights of neighboring buildings on a city street, from east to west. The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.

For example, given the array [3, 7, 8, 3, 6, 1], you should return 3, since the top floors of the buildings with heights 8, 6, and 1 all have an unobstructed view to the west.

Can you do this using just one forward pass through the array?
*/

let buildings = [3, 7, 8, 3, 6, 1];

const buildingWithView = (arr) => {
    let nob = 0;
    arr.forEach((currentValue, index, array) => {
        if (currentValue > array[index - 1]) {
            nob++;
        }
    });
    return nob;
};

console.log(buildingWithView(buildings));