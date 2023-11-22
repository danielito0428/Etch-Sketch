const DEFAULT_SIZE = 16;

const clearBtn = document.querySelector("#btnClear")
const canva = document.querySelector('.canva')
const colorBtn = document.querySelector('#btnColor')
const rainbowBtn = document.querySelector("#btnRainbow")






let mousedown = false;
document.body.onmousedown = ()=>{
    mousedown= true;
};
document.body.onmouseup = ()=>{
    mousedown = false;
};


clearBtn.addEventListener('click',()=>{
    canva.innerHTML='';
    size = prompt("Input the new size of the canva: ")
    checkSize(size);
})

rainbowBtn.addEventListener('click', () => { 
    activateButton(rainbowBtn);
});

colorBtn.addEventListener('click',()=>{
    activateButton(colorBtn)
})


function setGrid(size){
    let grid = document.querySelector(".canva")
    for (let col =0; col < size; col++){
        let column = document.createElement("div");
        column.classList.add("column");
        for (let row = 1; row <= size; row++) {
            let rows= document.createElement("div");
            
            rows.style.border = "1px solid #EBE3D5";
            rows.addEventListener('mouseover', changeColor);
            rows.addEventListener('mousedown', changeColor);
            column.appendChild(rows).className = 'rows';
        }
        grid.appendChild(column);
    }

}

setGrid(DEFAULT_SIZE);

function changeColor(e){
    if (mousedown){
        if(isActive(rainbowBtn)){
            let color1 = Math.floor(Math.random()*256);
            let color2 = Math.floor(Math.random()*256);
            let color3 = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        }else{
            e.target.style.backgroundColor = document.getElementById('colorPick').value;
        }
        
        
        
    }
}


function activateButton(button){
    let buttons = document.querySelectorAll(".btns")
    buttons.forEach(button => {
        button.classList.remove("active")
        
    });
    button.classList.add("active")
}

function isActive(button) {
    return button.classList.contains("active");
}


function checkSize(e){
    if (e > 100){
        alert("Size can not be greater than 100");
        setGrid(DEFAULT_SIZE);
    }else{
        setGrid(e)
    }
}

window.onload = function () {
    setGrid(DEFAULT_SIZE);
};






