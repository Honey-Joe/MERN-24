// console.log("Revamp 1")
// setTimeout(() => {
//     console.log("Revamp 2")
// }, 2000);
// console.log("Revamp 3")


// 

// console.log(fetch("https://dummyjson.com/users"));


fetch("https://dummyjson.com/users").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data.users[0])
}).catch((err)=>{
    console.log("Fetch Failed Error")
})