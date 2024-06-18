/////////////////////////////////////////////
// Coding Challenge #1

/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 

Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... "

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/* Understanding the problem
    - Array transformed to string seperated by three dats.
    - What is the X days? Answer: index + 1.  */

/* 2) Breaking up into sub problems
    - Transform array into a string.
    - Transform each element to string with oC
    - Strings needs to contain day (index + 1)
    - Add ... between elements and start and end of string */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} oC in ${i + 1} days ... `;
  }

  console.log("..." + str);
};

printForecast(data1);
