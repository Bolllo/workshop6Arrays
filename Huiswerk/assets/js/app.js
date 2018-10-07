//task 1
const lapRounds = [ // given elements 
    2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12
]

const randomLapRound = function(anArray){ // function that gives a random element from an array
        anArray = lapRounds[Math.floor(Math.random()*lapRounds.length)];
        return anArray
}
console.log(randomLapRound(lapRounds)); //prints the function randomLapRound with the argument lapRounds

//task 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
for (let i = 0; i < allMyRecords.length; i++) {
    for (let j = 0; j < allMyRecords[i].length; j++) {
       console.log(allMyRecords[i][j])
    }
}
//task 3

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i <= lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }
 console.log(filteredLapRoundsWithForLoop(lapRounds));

 const timeCheck = function (time) {
    return time < 4;
 }

 const filteredLapRun = function(anArray){
     return lapRounds.filter(timeCheck);
 }
console.log(filteredLapRun(lapRounds));
