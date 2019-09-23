/*
A theater employee want a list of all the seats from the main room. 
In this room, the seats are organized with as following: 
    - There are 26 columns of seats with a number from "1" to "26" 
    - Each column contains 100 seats with a number from "1" to "100"

At the end the list should be like: 
1-1
1-2
1-3
.
.
.
26-98
26-99
26-100

Create the function who returns the array containing all the seat numbers.
*/

const seats = () => {
    let seatNumbers = [];
    for (let c= 1; c <= 26; c++) {
        for (let n = 1; n <= 100; n++) {
            seatNumbers.push(`${c}-${n}`);
        }
    }
    return seatNumbers;
}
