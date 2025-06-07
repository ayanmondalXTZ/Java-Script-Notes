// Loop in java script
for (let i = 1; i <= 20; i++) {    //  for loop.........
    console.log("Ayan Mondal");
}
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 20) break;
    // more statements
}
let i = 0;

for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


let a = 10;
// while loop
while (a <= 20) {
    console.log(a);
    a++;
}
// do while loop
do {
    console.log(a);
    a++;
} while (a <= 15);
// for of loop
let myName = "ayan mondal";
for (let i of myName) {
    console.log(i);
}
// for in loop
let student = {
    name: "ayan mondal",
    age: 18,
    roll: 16
};
for (let i in student) {
    console.log(i);
    console.log(`My name is ${student[i]}`)
}