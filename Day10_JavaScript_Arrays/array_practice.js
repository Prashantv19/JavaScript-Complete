//let arr = [1,2, "name" , false]
// let arr1 = [1,2, 'name' , false]
// console.log(arr);
// console.log(arr1);

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[1])

// let arr = [1,23,34,45,56]
// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     console.log(value)
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })
// let obj = {
//     A:1,
//     B:2,
//     C:3
// }
// // for (const key in obj) {
// //     if (Object.hasOwnProperty.call(obj, key)){

// //     const value = obj[key];
// //     console.log(value)

// //     }
// // }
// let n = [1,2,3,4,5,6]
// for (const value of n) {
//     console.log(value)
// }

//------------map--------------

let arr = [1, 13, 24, 25, 17];
// let newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// let newArr = arr.map((e, index, arr) => {   //this is map() method
//   return e ** 2;
// });
// console.log(newArr);

//--------------filter, reduce-------------------

const greaterThanTen = (e)=>{
    if(e>10){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanTen))    //generally hum ye sare conditional statement direct pass kar sakte hai


//-----------------reduce-------------------
let arr2 = [1,2,3,4,5,6,7,8]
const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red))       //iska matlab hai ki iss array ko iss tarah se reduce karo jo function diya hai.

console.log(Array.from("prashant"))   //Array.from method , converts array to string.