let age = prompt("Enter your age ");
console.log(age);

let number = prompt("enter your number");
if (number % 5 == 0) {
    console.log("Yes the number is a multiple of five");
} else {
    console.log("No the number is not a multiple of five");
};

let mark = prompt("Enter your mark");
if (mark >= 80 && mark <= 100) {
    console.log("Your grade is A");
} else if (mark >= 70 && mark <= 79) {
    console.log("Your grade is B");
} else if (mark >= 60 && mark <= 69) {
    console.log("Your grade is C");
} else if (mark >= 50 && mark <= 59) {
    console.log("Your grade is D");
} else {
    console.log("You are fail now");
};


