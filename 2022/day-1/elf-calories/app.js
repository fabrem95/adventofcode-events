const fs = require('fs')

// console.clear()

let top3ElvesCals = [0];
let top3CalsSum = 0;
let elfCals = 0;

const elfCaloriesStrng = String(fs.readFileSync(__dirname + '/elf-calories.txt'))

const elfCalArr = elfCaloriesStrng.split("\n")
elfCalArr.forEach(cal => {

    if (cal) {
        elfCals += Number(cal)
    } else {

        if (elfCals >= top3ElvesCals[0]) {
            top3ElvesCals.push(elfCals)
            top3ElvesCals.sort()
            top3ElvesCals.length === 4 ? 
            top3ElvesCals.shift() 
            : 
            null
        }

        elfCals = 0;
    }
})

top3ElvesCals.forEach(cal => top3CalsSum += cal)

console.log(top3CalsSum)