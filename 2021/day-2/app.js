const fs = require('fs');
const { off } = require('process');

let subPosition = {
    horizontal: 0,
    depth: 0,
    aim: 0
};

const inputsString = String(fs.readFileSync(__dirname + '/input.txt'))

const inputsArr = inputsString.split("\n").map(input => input.split(" "))

// PART 1
//==================================================================================

// inputsArr.forEach(input => {
//     switch (input[0]) {
//         case "forward":
//             subPosition.horizontal += Number(input[1])
//             break;
//         case "up":
//             subPosition.depth -= Number(input[1])
//             break;
//         case "down":
//             subPosition.depth += Number(input[1])
//             break;
//     }
// })

// PART 2
//==================================================================================

inputsArr.forEach(input => {
    switch (input[0]) {
        case "forward":
            subPosition.horizontal += Number(input[1])
            subPosition.depth += (subPosition.aim * Number(input[1]))
            break;
        case "up":
            subPosition.aim -= Number(input[1])
            break;
        case "down":
            subPosition.aim += Number(input[1])
            break;
    }
})

console.log(subPosition.horizontal * subPosition.depth)
