1. write short notes on string methods with code examples

* to Lowercase()
     The toLowerCase() method converts a string to lowercase letters. The toLowerCase() method does not change the original string.
          
          let lang = "javascript"
           console.log (lang.toLowerCase())
           OUTPUT : javascript


* to UpperCase()
                The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string.

                let lang = "javascript"
                console.log (lang.toUpperCase())
                OUTPUT : JAVASCRIPT


* substring()
               The substring() method extracts characters from start to end (exclusive). The substring() method does not change the original string.

                let disc = "muscian"
                console.log(disc.substring(0,5)) 
                OUTPUT : musci



* replace()
               The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced.

               let fact = "I love travel"
               console.log(fact.replace("travel","travelling"))
               OUTPUT : I love travelling


* trim() 
               The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.

               let fact = "      Enjoy every moment in life"
               console.log(fact.trim())  
               OUTPUT : Enjoy every moment in life


* split()
               The split() method splits a string into an array of substrings. The split() method returns the new array.

               let fact = "I love munnar"
               console.log(fact.split(""))
               OUTPUT : [
                          'I', ' ', 'l', 'o',
                          'v', 'e', ' ', 'm',
                          'u', 'n', 'n', 'a',
                         'r'
                        ]


* slice()
              The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end.

              let place = "Banglore"
              console.log(place.slice(3,7))
              OUTPUT : glor




2. create a simple app that takes the users name and greets him/her after capitlizing the first letter of the
   users name and changing the rest of the letters into lowercase(toUpperCase(),toLowerCase(),slice(),length property,string concatenation)

                  let  userName=prompt("Enter your name:")
                  let firstletter = userName.slice(0,1).toUpperCase()
                  let restoftheletters = userName.slice(1,userName.length-1).toLowerCase()
                  let finalName = firstletter + restoftheletters
                  alert(`hello ${finalName}`)
