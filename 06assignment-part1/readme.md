1. write short  notes on array methods with code example

* push 
       Adds the new element at the end of the arry.

       let animals = ["tiger","lion","elephant"]
       animals.push("monkey")
       console.log(animals)
       OUTPUT : [ 'tiger', 'lion', 'elephant', 'monkey' ]


* POP()
    Remove the last element from the array.


    let animals = ["tiger","lion","elephant"]
    animals.pop("elephant")
    console.log(animals)
    OUTPUT : [ 'tiger', 'lion' ]


* shift()
          Eliminates the first element from the array.
           let animals = ["tiger","lion","elephant"]
           animals.shift()
           console.log(animals)  
           OUTPUT :  [ 'lion', 'elephant' ]


* unshift()
             Adds the new element at the begining of the arry.
             
             let animals = ["tiger","lion","elephant"]
             animals.unshift("zebra")
             console.log(animals)
             OUTPUT : [ 'zebra', 'tiger', 'lion', 'elephant' ]


* includes()
              The includes() method returns true if an array contains a specified value.

              let numbers = [1,2,3,4]
              console.log(numbers.includes(2))
              OUTPUT : TRUE
              
              The includes() method returns false if the value is not found.

              let numbers = [1,2,3,4]
              console.log(numbers.includes(6))
              OUTPUT : FALSE



* tostring 
            It converts an array into a string.              

            let fruits = ["apple","orange","grapes","pineapple"]
            console.log(fruits.toString())
            OUTPUT : apple,orange,grapes,pineapple


* reverse
            It is used to reverse the order of elements in an array.

            let fruits = ["apple","orange","grapes","pineapple"]
            console.log(fruits.reverse())
            OUTPUT : [ 'pineapple', 'grapes', 'orange', 'apple' ]


* join 
          
          It is used to join all elements of an array into a single string.

          let array =[1,2,3,4,5]
          console.log(array.join("-"))
          OUTPUT : 1-2-3-4-5



* concat()
          
          It is used to merge two or more arrays.

          let array1 = ["10","20","30"]
          let array2 = ["40","50","60"]
          console.log(array1.concat(array2))
          OUTPUT :[ '10', '20', '30', '40', '50', '60' ]


* flat()
         
         It is used to flatten nested arrays.

         let nestedarray =[[10,20],[30,40,50]]
         console.log(nestedarray.flat())
         OUTPUT : [ 10, 20, 30, 40, 50 ]


* slice()

         It is used to create a shallow copy of a portion of an array into a new array object. It does not modify the original array.

           let array =[1,2,3,4,5]
           console.log(array.slice(2,4))
           OUTPUT : [3,4]


* splice()
            It is used to add,remove or replace elements in an array.

            let fruits = ["apple","pineapple","banana",]
            fruits.splice(0,1,"kiwi")
            console.log(fruits)   
            OUTPUT :  [ 'kiwi', 'pineapple', 'banana' ]


* sort()
         It is used to sort the elements in an array.

         let fruits = ["apple","pineapple","banana",]
         console.log(fruits.sort())            
         OUTPUT :[ 'apple', 'banana', 'pineapple' ]


* fill()
         It is used to fill all the elements of an array. 

         let animals = ["lion","tiger","elephant",]
         console.log(animals.fill("zebra",0,2))
         OUTPUT : [ 'zebra', 'zebra', 'elephant' ]




