// const add = (a , b )=>{
//     console.log(a , b());
    
// }

// add(2,()=>{
//     console.log("Hello");
// })

// 1. set interval  
// 2. set timeout 
var count = 0;
var setI = setInterval(()=>{
    count++;
    console.log(count);   
},1000);

// clearInterval(setI);

setTimeout(()=>{
    clearInterval(setI);
},5000)
