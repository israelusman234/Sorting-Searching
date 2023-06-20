/*let firststudent = {
    fname: 'bukola',
    lname:  'great',
    level: '200',
    age: '30',
    hobbies: [ 'singing', 'dancing', 'skipping',]
    subject: {
        name: "javascript",
        code: "js101",
        passmark: 85
        instructor: {
            name: "profsain hussain",
            id: "GMC22" ,
            stack: {'html',  'css', 'javascript', 'react', 'mongodb',}
        }
    }
     
}
//accessing object
console.log(firststudent{"last name"})

 // adding or updating properties
 firststudent ["phone number"] = "09034456263"
 console.log(firststudent) 

 function greeting(student) {
    console.log 
 }
 */

 const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  level:300,
  fullName: function() {
    console.log(`welcome ${person.firstName} ${person.lastName} your age is ${person.age} and your level is ${person.level}`)
  }
}
person.fullName();