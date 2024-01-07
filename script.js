let id;
let color = ["red","blue","green","yellow","pink","brown","black","orange","peru","tan"];
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let mainBody = document.querySelector(".main");


function changeColor(){
    let ran  = Math.floor(Math.random()*color.length);
    if(color[ran]==="black"){
        mainBody.style.color = "white";
        mainBody.style.backgroundColor = color[ran];
    }
    else{
        mainBody.style.color = "black";
        mainBody.style.backgroundColor = color[ran];
    } 
    console.log(color[ran]);
}

button1.addEventListener("click",()=>{
    id = setInterval(changeColor,1000);
});

button2.addEventListener("click",()=>{
    clearInterval(id);
});
