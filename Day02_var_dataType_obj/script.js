console.log("hey this is video2")

var a= 5;
a= a+1;  //allowed
var b= 6;
var c= "Prashant";

console.log(a +  b + 8);
console.log(typeof a, typeof b, typeof c);

const a1 = 6;
// a1 = a1+1;  //not allowed

//Always use let instead of 'var'

{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {    //key and value
    "name": "Harry",  //"" laga bhi sakte hai aur nahi bhi
    "job code": 5600,  // jab bich me space ho toh jarur lagana hota hai
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);