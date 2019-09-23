/* 
Correct the minMax() function 
The function get an array of positives, negatives numbers or null 
Then returns an array of 2 entries containing the min and max value in it

Example 1:
Array: [4, 6, 35, -65, -9, 0, 67]
Result: [-65, 67]

Example 2:
Array: [-30, 5, 43, 108, -5, -7, 89]
Result: [-30, 108]

Example 3:
Array: [56, 7, 63, 9, 7, 12, 85]
Result: [7, 85]
*/

const minMax = (array) => {
    let min = array[0];
    let max = array[0];
    let values = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        else if (array[i] > max) {
            max = array[i];
        }
    }
    values.push(min, max);
    return values;
}
