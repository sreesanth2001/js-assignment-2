1. Write short notes on below with code examples 

 * While loop:
          The while loop repeats a block of code as long as a specified condition is true.

          ```js
          let i =1
          while(i<5){
          console.log(i)
          i++
          }
          ```

 * do-while loop:
         The do-while loop is similar to the while loop, but it will always execute the block of code once before checking the condition.

         ```js
         let i =1
         do{
         console.log(i)
         i++ }while(i<5)
         ```

 * for loop:
         The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.

         ```js
         for( i=1;i<5;i++){
         console.log(i)
         }   
         ```      

 * for in loop:
        The for in loop iterates over the properties of an object.

        ```js
        let arr=["India","UAE","USA"]
        for(i in arr){
        console.log(i)
        }
        OUTPUT:0
               1
               2
        ```

 * for of loop:
          The for of loop iterates over the properties of an array.
               
         ```js
        
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
         OUTPUT:user1
                john
                user1 is john
                user2
                Avin
                user2 is Avin
                user3
                Tinu
                user3 is Tinu
                ```

2. Write a function that takes an array of numbers as an argument and returns the sum of its element

     ```js
      let arr = [1, 2, 3, 4, 5]
      let sum = 0;
      let sumofelements = (input) => {
      for ( i = 0; i <= input.length; i++) {
      sum += i; 
        }
        return sum
        }
        console.log(sumofelements(arr))
        OUTPUT : 15
        ```
    
3. Create a function that filters strings in an   
   array by their length   

   ```js
    function filterArray() {
        let arr = ['banana', 'watermelon', 'apple', 'grape','gauva','pineapple','mango']
        let filteredArr = arr.filter(item => item.length <= 4)
        
        return filteredArr 
    }
    
    console.log(filterArray())
    ```
                   
4. Create a function that returns a new array containing the square roots of each number in the original array 
   [1,4,9,16,25] (Math.sqrt())
     
     ```js
    function SquareRoots(arr) {
    return arr.map(Math.sqrt)
    }
    let Array = [1, 4, 9, 16, 25]
    let NewArray = SquareRoots(Array)
    
    console.log(NewArray)
    OUTPUT: [ 1, 2, 3, 4, 5 ]
    ```

5. Create an array with 5 student’s names. Then create a function that takes two parameters (allStudents      
   and studentName). Iterate over all the students and find that specific user‘studentName’.
   
   ```js
   let allStudents = ["Tinu", "Gokul" "Dinraj", "Amos", "Abhijith","Ganesh"]
   function findStudent(allStudents, studentName){
    for (i = 0; i < allStudents.length; i++) {
        if (allStudents[i]=== studentName) {
            return true;
        }
    }
    return  false;
   }
  let result = findStudent(allStudents, "john")
  console.log(result)
   OUTPUT : false
  ```

 6.Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, 
  and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(use while loop) .
  

  ```js
   let count = 1
   let arr =[]
   while (count<=100){
     if(count % 3 ===0 && count % 5 ===0){
        arr.push("FizzBuzz")
    }else if (count % 3===0){
        arr.push("Fizz")
    }else if (count % 5===0){
        arr.push("Buzz")
    }
    count++
 }
 console.log(arr)   
 ```