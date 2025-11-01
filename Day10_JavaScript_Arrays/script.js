//An Array
// It is mutable(changable)     but string is not.
let arr = [1, 2, 7, 3, 4,5]
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// arr[1] = 21;   //mutability
// console.log(arr);

//--------------ARRAY METHODS---------------
//console.log(arr.toString());   //convert to string

//console.log(arr.join( " and " ));       //join Arrays using seperator

console.log(arr.pop());       //Remove(nikal lo ) last element from array

console.log(arr.push(10))      //add a element at the end of array
console.log(arr.push("PV"))
console.log(arr);

console.log(arr.shift());      //remove 1st element and returns it
//shift, pop ka bhai hota hai
console.log(arr);

console.log(arr.unshift(" VP "));  // ADD element at 1st index
//unshift push ka bhai hota hai

delete arr[2]         //it is an operator, used to delete an element from an array
console.log(arr);

let arr1 = [11, 22,33,44,55, false]
arr2 = arr.concat(arr1)        //used to join two given arrays,  AND ye nya array create karta hai existing array change nahi hota hai
console.log(arr2);


