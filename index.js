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
        dawn:"mousedown",
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
    }catch(e){
        deviceType= "mouse";
        return false;
    }
}

isTouchDevice();

gridButton.addEventListener("click", ()=>{
    container.innerHTML="";
    let count = 0;
    for(let i=0 ; i<gridHeigth.value; i++){
        //count ++; //por que????
        let div=document.createElement("div");
        div.classList.add("gridRow");

        for(let j=0; j < gridWidth.value;j++){
            count ++;
            let col=document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].dawn, ()=>{
                console.log(events[deviceType].dawn)
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e)=>{
                let elementId= document.elementFromPoint(
                    !isTouchDevice()?e.clientX: e.touches[0].clientX,
                    !isTouchDevice()?e.clientY: e.touches[0].clientY,
                ).id;
                checker(elementId);
            });
            col.addEventListener(events[deviceType].up,()=>{
                draw=false;
            });
            div.appendChild(col);

        }

        container.appendChild(div)
    }
});
/*La funcion cheker es la encargada del dibujo y del borrado*/
function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    console.log("elementID= "+elementId)
    console.log(gridColumns)
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            console.log(elementId+"=="+element.id+"-------------------si");
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

clearGridButton.addEventListener("click",()=>{
    container.innerHTML="";
});

eraseBtn.addEventListener("click",()=>{
    erase=true;
    draw=false
});

paintBtn.addEventListener("click",()=>{
    erase=false;
});

gridWidth.addEventListener("input",()=>{
    widthValue.innerHTML = gridWidth.value <9 ? `0${gridWidth.value}`:gridWidth.value;
});

gridHeigth.addEventListener("input",()=>{
    heigthValue.innerHTML = gridHeigth.value <9 ? `0${gridHeigth.value}`:gridHeigth.value;
});

window.onload = ()=>{
    gridHeigth.value=0;
    gridWidth.value=0;
};

