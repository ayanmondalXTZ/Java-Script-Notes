let fruit = "mango";
switch (fruit) {
    case "watermaleon":
        console.log("That is not");
        break;
    case "mango":
        console.log("mango 250 rupees pound");
        break;
    default:
        console.log("fruit could't found");
}

let age = prompt("Enter your age");
age = Number(age); // Convert string input to number

switch (true) {
    case (age >= 18):
        console.log("You can vote");
        break;
    default:
        console.log("You are under age");
}


// let age = 25;

// switch (true) {
//     case (age < 18):
//         console.log("Minor");
//         break;
//     case (age >= 18 && age < 60):
//         console.log("Adult");
//         break;
//     case (age >= 60):
//         console.log("Senior");
//         break;
//     default:
//         console.log("Invalid age");
// }
