const fs = require('fs');
const { off } = require('process');

// console.clear()

let largerMeasurements = 0;

const measurementsString = String(fs.readFileSync(__dirname + '/input.txt'))

const measurementsArr = measurementsString.split("\n").map(m => Number(m))

// PART 1
//==================================================================================

// for (let i = 0; i < measurementsArr.length; i++) {
//     if (i > 0 && measurementsArr[i] > measurementsArr[i-1]) largerMeasurements++
// }

// console.log(largerMeasurements)

// PART 2
//==================================================================================

const measurementsTrios = measurementsArr.map((m, i) => measurementsArr.slice(i, i+3)).map(trio => {
    let trioVal = 0
    for (const m of trio) {
        trioVal += m
    }
    return trioVal;
})

for (let i = 0; i < measurementsTrios.length; i++) {
    if (i > 0 && measurementsTrios[i] > measurementsTrios[i-1]) largerMeasurements++
}

console.log(largerMeasurements)