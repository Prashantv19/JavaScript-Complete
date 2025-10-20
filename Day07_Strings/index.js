console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);   //undefined show karega

console.log(a.length)   // find the length of array/string

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)   // (``) this is backtics used for template literals

let b = "ShivamSh"
console.log(b.toUpperCase())   //upper case ho jayega, these are functions
console.log(b.toLowerCase())   //lower case ho jayega

console.log(b.length) 

console.log(b.slice(1, 5))   //slicing

console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))   //only 1st occurane hi replace hogi
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))   //string concatination(addition) function

console.log(b)  //initial string kabhi change nhi hoti jab bhi hum function use karte hai toh nayi string banti hai.
//String are immutable.


// //Escape Sequence
// b = "Roh"an"   this is wrong
// b = `Roh"an`   this is 1st method
// b = "Roh\"an"   this is 2nd method
// //also \n, \t, \r are used 


// . ka use karke function explore kar sakte hai