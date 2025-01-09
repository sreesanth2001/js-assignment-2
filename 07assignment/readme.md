1. Write a javascript function to check whether an 'input' is an array .(Array.isArray([1,2,3])).
   
    let input = ["1","2","3"]
    let checkifarray =() =>{
    return Array.isArray(input)
    }
    console.log(checkifarray())

2. Write a javascript function that takes an  array as an argument and returns the first element of  the
    array.

      let array =["1","2","3"]    
      let firstelement =() =>{
      return array[0]
      }
      console.log(firstelement())


3. Write a javascript function that takes an array as an argument and returns the last element of the array.

      let array =["1","2","3"]    
      let firstelement =() =>{
      return array[2]
      }
      console.log(firstelement())

4. Write a simple javascript function to join all elements of the following array into a string .
   sample array: mycolor =["red","green","white","black"].

    function elements(array) {
    return array.join(",")
    }
    let newarray=["Red", "Green", "White", "Black"]
    console.log(elements(newarray))
    OUTPUT : Red,Green,White,Black

5. Write a javascript program that accepts a number as input and inserts dashes (-) between each.For     
   example , if you accept 925468 the output  should be 9-2-5-4-6-8(tostring().split().join())   


    function insertDashes(number) {
    let numberString = number.toString()
    let result = numberString.split('').join('-')
    return result
    }
    let inputNumber = 925468
    let output = insertDashes(inputNumber)
    console.log(output) 
    OUTPUT: 9-2-5-4-6-8

6. Write a javascript function that checks if the given number is even or odd then returns a Boolean value     
   (use : arrow function,return keyword,ternary operator)


   let isEven = (number) => {
   return number % 2 === 0 ? true : false
   }
   console.log(isEven(4))
   console.log(isEven(7))   
   OUTPUT : true
            false

7. Create an array of guestList. Write a javascript function that takes the user’s name as an argument and    
   checks whether it is in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.            

   const guestList = ["tinu","gokul","abhijith","dinraj","amos","ganesh"]
   function checkGuest(name) {
   if (guestList.includes(name)) {
   return "Welcome"
   } else {
    return "Sorry, good luck next time"
   }
   console.log(checkGuest("Alice"))
   console.log(checkGuest("John"))
   Output: "Welcome" 
   Output: "Sorry, good luck next time"


8. Write a javascript function that reverses a given number example: 123456789 => 987654321 (toString(), split 
   (), reverse (), join())   

   function reverseNumber(number) {
   let reversedString = num.toString().split('').reverse().join('')
   return Number(reversedString)
  }
  console.log(reverseNumber(123456789))
  OUTPUT: 987654321


9. Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper  
   case. Example: “javascript” => “Javascript”

   function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1,str.length)
   }
   console.log(capitalizeFirstLetter("javascript"))
   OUTPUT: Javascript