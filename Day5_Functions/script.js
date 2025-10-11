console.log("function tutorial")
console.log("function tutorial")
console.log("function tutorial")
console.log("function tutorial")
console.log("function tutorial")

function nice(name) {
    console.log("My name is " + name);
    console.log("My name is " + name);
    console.log("My name is " + name);
    console.log("My name is " + name);
    console.log("My name is " + name);
    console.log("My name is " + name);
    
}
nice("Prashant")

function sum (a,b, c=3)     // here "c" is a default value
{
    //console.log(a+b);    
    return a + b +c      // returns the result value  to the place where the function was called.
}
result1 = sum (5,3);
result2 = sum (4,3);
result3 = sum (7,3);
result4 = sum (9,3);
console.log("The sum of Two no. is ", result1)
console.log("The sum of Two no. is ", result2)
console.log("The sum of Two no. is ", result3)
console.log("The sum of Two no. is ", result4)

//Arrow Function

const func1 = (x)=>{  //This creates an arrow function and stores it inside the variable func1.
    console.log("Im an arrow function", x)

}
func1(34);     //Function Call: Execution goes inside the function with x = 34.
func1(64);
func1(54);
func1(74);
console.log();