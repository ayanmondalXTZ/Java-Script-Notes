MyAccountBalance = null; // Null data type
console.log(MyAccountBalance);
MyPhoneNumber = undefined; // Undefined Data type 
console.log(MyPhoneNumber);
isMyAge = true; // Boolean Data type
console.log(isMyAge);
// This called Dynamically Typed Language !
let x = 10;       // x is a number
x = "Ayan";       // now x is a string
x = true;         // now x is a boolean
console.log(x); // Out put is : true

// let a = 10;
// let a = 20;
// console.log(a); this is send a error because you changed the variable value but could't declare same variable !
________________________________________________________________________________
// Key Difference Example !
// Primitive (copied by value)
let a = 10;
let y = a;
y = 20;
console.log(a); // 10 (unchanged)

// Non-Primitive (copied by reference)
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1, 2, 3] (modified)


_______________________________________________________________

// all primitive data type
// Examples:

// string ("hello")

// number (42, 3.14)

// boolean (true, false)

// null (intentional absence of value)

// undefined (uninitialized variable)

// symbol (unique identifier, Symbol('id'))

// bigint (large integers, 9007199254740991n)