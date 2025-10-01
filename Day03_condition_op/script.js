console.log("Hello I am Conditional Statement");
let age = 18;
// let grace= 2;

// age+=grace ;       //increment op
// console.log(age)

// // Asignment operator
// console.log(age+grace)
// console.log(age-grace)
// console.log(age/grace)
// console.log(age*grace)
// console.log(age**grace)
// console.log(age%grace)
// condition
// if(age!=18){
//     console.log("you can drive");
// }
// else{
//     console.log("you can not drive");
// }
//operator
// == equal to
// != not equal to
// === check equal value and type
// !== check not equal value and not equal type
// >
// <
// >=
// <=
// ?

// node js rapple

// "3"== 3   -> True  (checks only value)

// "3" === 3  -> False ( checks both value and type)

// if-else-if ladder

if (age == 18) {
  console.log("you can drive");
} else if (age == 0) {
  console.log("Are you kidding");
} else {
  console.log("you can not drive");
}

//ternery operator
a = 5;
b = 8;
let c = a > b ? a - b : b - a;
console.log(c);

/*
translate to

if(a>b){
    let c= a-b;
}
    else{
        let c = b-a;
        }
*/
