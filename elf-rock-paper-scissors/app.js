const fs = require('fs')

let me = 1
let opponent = 0

let rock = ["A", "X"]
let paper = ["B", "Y"]
let scissors = ["C", "Z"]

let shapeScore = 0;
let outcomeScore = 0;

const stratString = String(fs.readFileSync(__dirname + '/input.txt'))

const stratArr = stratString.split("\n").map(strat => strat.split(" "))

//PART 1
//=========================================================================

// stratArr.forEach(strat => {

//     switch (strat[me]) {
//         case "X": shapeScore += 1
//             break;
//         case "Y": shapeScore += 2
//             break;
//         case "Z": shapeScore += 3
//             break;
//     }

//     switch (strat[opponent]) {
//         case "A": 
//             if (strat[me] === "X") outcomeScore += 3;
//             else if (strat[me] === "Y") outcomeScore += 6;
//             else if (strat[me] === "Z") outcomeScore += 0;
//             break;
//         case "B":
//             if (strat[me] === "X") outcomeScore += 0;
//             else if (strat[me] === "Y") outcomeScore += 3;
//             else if (strat[me] === "Z") outcomeScore += 6;
//             break;
//         case "C": 
//             if (strat[me] === "X") outcomeScore += 6;
//             else if (strat[me] === "Y") outcomeScore += 0;
//             else if (strat[me] === "Z") outcomeScore += 3;
//             break;
//     }
// })

// console.log(shapeScore + outcomeScore)

//PART 2
//=========================================================================

stratArr.forEach(strat => {

    switch (strat[me]) {
        case "X": outcomeScore += 0
            break;
        case "Y": outcomeScore += 3
            break;
        case "Z": outcomeScore += 6
            break;
    }

    switch (strat[opponent]) {
        case "A": 
            if (strat[me] === "X") shapeScore += 3;
            else if (strat[me] === "Y") shapeScore += 1;
            else if (strat[me] === "Z") shapeScore += 2;
            break;
        case "B":
            if (strat[me] === "X") shapeScore += 1;
            else if (strat[me] === "Y") shapeScore += 2;
            else if (strat[me] === "Z") shapeScore += 3;
            break;
        case "C": 
            if (strat[me] === "X") shapeScore += 2;
            else if (strat[me] === "Y") shapeScore += 3;
            else if (strat[me] === "Z") shapeScore += 1;
            break;
    }
})

console.log(shapeScore + outcomeScore)