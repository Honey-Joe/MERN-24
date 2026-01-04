console.log("Hello");
console.log("HEllo 2");

// a = "Hello"

// a = 5;

// console.log(a);

//Single Threaded Language 
var b = 4;

{
    let a = 10;
    const c = 15;
    var d = 10
    console.log(a)
    console.log("Inside the block",b)
    console.log(c);
}

// console.log(a)

console.log(d);
console.log(typeof(d))
e = "Hello";
console.log(typeof(e))
bool = true 

console.log(typeof(bool))
variable = null 

 f = undefined;
 console.log(variable)
 console.log(typeof(f))

console.log("Outside the block", b);

// Data types 

// 1. Primitive  - number , string , boolean , null , undefined

// 2. Non - primitive - array and object 

/*
    Arithmetic Operators

    + - add , - sub , * - mul , / - div , % - mod , ++ increment , -- de

*/ 

console.log(5+10);
console.log(10-5);
console.log(5*10);
console.log(10/5);
console.log(10%3);

// function 

function add(a  , b){
    c = a + b;
    return c;
}

result = add(5,10);

const a = (par)=>{
    // console.log("Hello");
    console.log(par)
}

a(5)



console.log("The addition is ", result);
age = 18

if(age > 18){
    console.log("You can vote");
}else if(age == "18"){
    console.log("You can vote normal equal");
}else{
    console.log("You can't vote");
}
// > , >= , < , <= , == , === , != , !==

for(let i = 0; i < 10; i++){
    console.log(i);
}