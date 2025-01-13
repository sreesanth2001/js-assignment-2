// let i =1
// while(i<5){
// console.log(i)
// i++
// }

// let i =1
// do{
// console.log(i)
// i++ }while(i<5)

// for( i=1;i<5;i++){
// console.log(i)
// } 

// let arr = [1, 2, 3, 4, 5]
// let sum = 0;
// let sumofelements = (input) => {
// for ( i = 0; i <= input.length; i++) {
// sum += i; 
// }
// return sum
// }
// console.log(sumofelements(arr))

// function filterArray() {
//     let arr = ['banana', 'watermelon', 'apple', 'grape','gauva','pineapple','mango']
//     let filteredArr = arr.filter(item => item.length <= 4)
    
//     return filteredArr 
// }

// console.log(filterArray())


// function SquareRoots(arr) {
// return arr.map(Math.sqrt)
// }
// let Array = [1, 4, 9, 16, 25]
// let NewArray = SquareRoots(Array)
    
// console.log(NewArray)

// let allStudents = ["Tinu", "Gokul" ,"Dinraj", "Amos", "Abhijith","Ganesh"]
//    function findStudent(allStudents, studentName){
//     for (i = 0; i < allStudents.length; i++) {
//         if (allStudents[i]=== studentName) {
//             return true;
//         }
//     }
//     return  false;
//    }
// let result = findStudent(allStudents, "john")
// console.log(result)

// let count = 1
//    let arr =[]
//    while (count<=100){
//      if(count % 3 ===0 && count % 5 ===0){
//         arr.push("FizzBuzz")
//     }else if (count % 3===0){
//         arr.push("Fizz")
//     }else if (count % 5===0){
//         arr.push("Buzz")
//     }
//     count++
//  }
//  console.log(arr)   


// let arr=["India","UAE","USA"]
// for(i in arr){
// console.log(i)
// 

    let obj={
    user1:"john",
    user2:"Avin",
    user3:"Tinu"
   }
    for(i in obj){
    console.log(i)
    console.log(obj[i])
    console.log(`${i} is ${obj[i]}`)
    }