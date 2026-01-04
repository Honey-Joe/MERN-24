let a = [1 , 2, 3 , 4 ,"Hello" , true , null , [23 , 42]];

console.log(a);

//accessing an element in an array
// console.log("Length of the array ",a.length)
// console.log(a[7]);
// for(i = 0 ; i < a.length ; i++){
//     console.log(a[i]);
// }

a[4] = "Joe"

console.log(a);

// Adding an element in an array

a.push(20);
console.log("Pushing a value in an array" , a);
a.unshift(0);
console.log("Adding element in the beggining of an array " , a);

//Removing an element in an array

a.pop();
console.log("Removing an element from the end of an array", a);
a.shift();
console.log("Removing an element from the start of an array", a);

a.splice(2,2);
console.log("Removing an element from the middle of an array", a);

//Objects - Collection of Properties
//Property - Key:value pair 

let obj = {
    name : "Joe",
    age : 18,
    gender : "Male",
    rollno : 123,
    hobbies : ["Reading" , "Coding" , "Gaming"],
    properties : {
        height : 5.5,
        weight : 50
    }
}


console.log(obj)

// Accessing object properties
//Dot notation , Bracket Notation

console.log(obj.age);
console.log(obj[01]);

//Modifying object properties
obj.age = 30;
obj["name"] = "Honey"; 

console.log(obj);

//Adding new properties to an object
obj.city = "Delhi";
obj["country"] = "India"

console.log(obj);

delete obj.city;
console.log(obj)

delete obj["country"]
console.log(obj)


