let arr = ["ayan", "rohan", "suman"];
arr.forEach((item) => {
    console.log(item);
})

let arrObj = [
    {
        name: "ayan mondal",
        age: 18
    },
    {
        name: "rohan debnath",
        age: 21
    }
];

arrObj.forEach((item) => {
    console.log(item.name);
    console.log(item.age);
});

let myObj = {
    name: "suman mondal",
    age: 24
};
for (let i in myObj) {
    console.log(`My name is ${myObj[i]}`);
    console.log(`My age is ${myObj[i]}`);
}

let myFullName = "ayan mondal";
let word = myFullName.split(" "); // Correct way to split by space

for (let i of word) {
    console.log(i);
}

let FullName = "ayan mondal";
let words = FullName.split(" ");
console.log(words[0]); // prints "ayan"
