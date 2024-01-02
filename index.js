let container= document.querySelector(".container");
let gridButton= document.getElementById("submmit-grid");
let clearGridButton=document.getElementById("clear-grid");
let gridWidth=document.getElementById("width-range");
let gridHeigth=document.getElementById("heigth-range");
let colorButton= document.getElementById("color-input");
let eraseBtn=document.getElementById("erace-btn");
let paintBtn=document.getElementById("paint-btn");
let widthValue=document.getElementById("width-value");
let heigthValue=document.getElementById("heigth-value");

let events = {
    mouse:{
        dawn:"mousedawn",
        move:"mousemove",
        up:"mouseup"
    },
    touch:{
        dawn:"touchstart",
        move:"touchmove",
        up:"touchend"
    },
};

let deviceType="";

let draw= false;
let erase=false;

const isTouchDevice = () =>{
    try{
        document.createEvent("Touchevent");
        deviceType="touch";
        return true;
    }
    catch(e){
        deviceType= "mouse";
        return false;
    }
}

isTouchDevice();

gridButton.addEventListener("click", ()=>{
    container.innerHTML="";
    let count = 0;
    for(let i=0 ; i<gridHeigth.ariaValueMax; i++){
        count +=2;
        let div=document.createEvent("div");

        for(let j=0; j < gridWidth.value;j++){
            
        }
    }
})


