// let input = ["1","2","3"]
// let checkifarray =() =>{
//     return Array.isArray(input)
// }
// console.log(checkifarray())

// let array =["1","2","3"]    
// let firstelement =() =>{
// return array[0]
// }
// console.log(firstelement())

// let array =["1","2","3"]    
// let firstelement =() =>{
// return array[2]
// }
// console.log(firstelement())

// function elements(array) {
//     return array.join(",")
// }
// let newarray=["Red", "Green", "White", "Black"]
// console.log(elements(newarray))

// function insertDashes(number) {
// let numberString = number.toString()
// let result = numberString.split('').join('-')
// return result
// }
// let inputNumber = 925468
// let output = insertDashes(inputNumber)
// console.log(output) 
    

// let isEven = (number) => {
// return number % 2 === 0 ? true : false
// }
// console.log(isEven(4))
// console.log(isEven(7))   

//    const guestList = ["tinu","gokul","abhijith","dinraj","amos","ganesh"]
//    function checkGuest(name) 
//    if (guestList.includes(name)) {
//    return "Welcome"
//    } else {
//     return "Sorry, good luck next time"
//    }
//    console.log(checkGuest("tinu"))
//    console.log(checkGuest("gokul"))
//    Output: "Welcome" 
//    Output: "Sorry, good luck next time"

// function reverseNumber(number) {
// let reversedString = number.toString().split('').reverse().join('')
// return Number(reversedString)
// }
// console.log(reverseNumber(123456789))
   
function capitalizeFirstLetter(string) {
return String.char(0).toUpperCase() + string.slice(1,string.length)
}
console.log(capitalizeFirstLetter("javascript"))