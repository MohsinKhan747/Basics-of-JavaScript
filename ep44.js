// conditional statements 

let new_Array = [1,2,3,4,5,6,7,8,9,10];
if(new_Array.length === 0)
{
    console.log("Empty")
}
else if(new_Array.length < 5)
{
    console.log("small")
}
else if(new_Array.length < 10)
{
    console.log("medium")
}
else{
    console.log("Large")
}

// writing single line if statement

const isUserLoggedIn = false;

if(isUserLoggedIn) console.log("user is logged in")

if(isUserLoggedIn)
    console.log("user is logged in!!")

// Ternary Operator 

isUserLoggedIn ? console.log("user is logged in") : console.log("not logged in");

const welcomeMessage = isUserLoggedIn ? "Welcome" : "Please log in"

console.log(welcomeMessage);

// switches

 const favoriteAnimal = "Lodhi";

 switch (favoriteAnimal)
 {
     case 'jaguar':
     case 'Cat':
     case 'lion':    
         console.log("Cats are Preety cool")
         break;
     case 'dog':
             console.log("They are kinda cool")
             break;
     case 'Shark':
         console.log("that is an interesting choice")
         break;
     default:
         console.log("That is cool but i am unfamiliar with that Animal");      
 }

 // Exercise

 // create a switch that checks to see the value of the number variable
 // if the number is 0 print out " it is zero"
 // if the number is 1 or 2 print out " it is small"
 // if the number is 3 or 4 print out " it is medium"
 // if the number is 5 print out " it is large"
 // if the number is none of these print out "try again"


// Solution 
 const number = 5;

 switch (number)
 {
     case 0:
         console.log("it is zero")
         break;
     case 1:
     case 2:
         console.log("it is small");
         break;
     case 3:
     case 4:
         console.log("it is medium")
         break;
     case 5:
         console.log("it is large");
         break
     default:
         console.log("Try Again");                   
 }

 // For loops

 //3 things
 // a variable for starting
 // an ending point
 // how to modift our variable

 for(let i = 0; i < 5; i++)  
 {
    console.log("hi")
 }

 // Break and continue Keyword

 for(let i = 0; i <= 10; i++)
 {
     if(i==5) break;
     console.log(i);
 }

 for(let i = 0; i < 5; i++)
 {
     console.log("start " + i )
     if(i < 2) continue
     console.log("end " + i);
 }
 console.log("bye");

 // WHile loop

 let i = 0
 while(i < 5)
 {
     console.log(i)
     i++;
 }

 const person = {
     name:"Peter",
     friend:{
         name:"Loki",
         friend:{
             name:"Mary"
         }
     }
 }
 
 let currentPerson = person
 while(currentPerson != null)
 {
     console.log(currentPerson.name)
     currentPerson = currentPerson.friend
 }


