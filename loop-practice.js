let i = 5;
do {
    // console.log(i);
    i++;
} while (i >= 10);

let name = "ayan mondal";
for (let i of name) {
    // console.log(i);
}

let student = {
    name: "ayan",
    age: 18,
    roll: 16
};
for (let i in student) {
    // console.log(`${student[i]}`);
}

let coding = ["js", "c", "java", "c++"];
coding.forEach((language) => {
    //console.log(language);
})
let studentInfo = [
    {
        name: "ayan mondal",
        age: 18
    },
    {
        name: "rupom halder",
        age: 18
    }
];
studentInfo.forEach((info) => {
    console.log(info.name);
})