const fs = require('fs')

//PART 1
//=========================================================================

let me = 1
let opponent = 0

let rock = ["A", "X"]
let paper = ["B", "Y"]
let scissors = ["C", "Z"]

let shapeScore = 0;
let outcomeScore = 0;

const stratString = String(fs.readFileSync(__dirname + '/input.txt'))

const stratArr = stratString.split("\n").map(strat => strat.split(" "))

stratArr.forEach(strat => {

    switch (strat[me]) {
        case "X": shapeScore += 1
            break;
        case "Y": shapeScore += 2
            break;
        case "Z": shapeScore += 3
            break;
    }

    
})

console.log(shapeScore + outcomeScore)