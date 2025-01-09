Write short notes on Array methods with code example

* filter()
     It is used to create a new array with all elements that pass a test implemented by a provided function.

      const ages = [32, 33, 16, 40]
      function checkAdult(age) {
      return age >= 18
      }
      const adults = ages.filter(checkAdult);
      console.log(adults)
      Output: [32, 33, 40]


* some()
     
     It is used to check if at least one element in an array passes a test implemented by a provided function. It returns true if any element passes the test, otherwise it returns false.

      const ages = [3, 10, 18, 20]
      const isAdult = ages.some(age => age > 18)
      console.log(isAdult)
      OUTPUT : TRUE

* every 

    It is used to test whether all elements in an array pass a specified test function. It returns true if the function returns true for all elements, and false otherwise.

      const numbers = [45, 4, 9, 16, 25]
      const allOver18 = numbers.every(function(value) {
      return value > 18;
      })
      console.log(allOver18)
      OUTPUT: false
      
* map()

    It is used to create a new array by applying a function to each element of an existing array.

     const numbers = [1, 2, 3, 4, 5]
     const squaredNumbers = numbers.map(num => num * num)
     console.log(squaredNumbers)
     OUTPUT: [1, 4, 9, 16, 25]

* foreach()

    It is used to execute a provided function once for each array element.

l    let sum = 0
     const numbers = [65, 44, 12, 4]
     numbers.forEach(function(item) {
     sum += item
     })
     console.log(sum) 
     OUTPUT: 125  