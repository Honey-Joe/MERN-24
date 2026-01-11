// const getPara = ()=>{
//     var para = document.getElementById("para");
//     para.textContent = "This is a paragraph";
// }


// getBtn.onclick = ()=>{
    //     var para = document.getElementById("para");
    //     para.textContent = "This is a paragraph";
    // }
    
var para = document.getElementById("para");
var count = 0;
var incBtn = document.getElementById("increase");
incBtn.addEventListener("click" , ()=>{
    count++;
    para.textContent = count;
})

var decBtn = document.getElementById("decrease");
decBtn.addEventListener("click" , ()=>{
    count--;
    para.textContent = count;
})

var resBtn = document.getElementById("reset");
resBtn.addEventListener("click" , ()=>{
    count = 0;
    para.textContent = count;
})

var imgSrc = document.getElementById("img");
imgSrc.src = ""