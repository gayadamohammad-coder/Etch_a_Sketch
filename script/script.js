const container = document.querySelector("#container");
const body = document.querySelector("body");
function makeRows(rowNum){
    for(let i = 0; i<rowNum;i++){
        let row = document.createElement("div");
        container.appendChild(row);
        row.className = "gridRow";
    };
};


function makeColumns(columnNum){ 
    let rowNum = document.querySelectorAll(".gridRow");

    for (let i=0; i<rowNum.length;i++){
        for (let j=1; j<=columnNum;j++){
            let column= document.createElement("div");
            rowNum[i].appendChild(column);
            column.className = "cells";
            let cellSize = 960/columnNum;
            column.style.width= cellSize +"px";
            column.style.height = cellSize +"px";
            let opacityValue = 0.1;
            column.style.opacity = opacityValue;

            
            column.addEventListener("mouseover",()=>{
                
                if(opacityValue<1){
                     opacityValue+=0.1;
                    column.style.opacity= opacityValue;}
                
                if(rgbMode){
                    let red = Math.round(Math.random()*255);
                    let green = Math.round(Math.random()*255);
                    let blue = Math.round(Math.random()*255);
                    
                    column.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
                }else if (blackMode){
                    
                    column.style.backgroundColor = "black";
                }else if (eraserMode){
                    column.style.backgroundColor = "white";
                }
                
                });
        }
            }
    }
const gridButton = document.createElement("button");
body.insertBefore(gridButton, container);
gridButton.textContent="grid size";
gridButton.addEventListener("click",gridShow);

const rgbRandom = document.createElement("button");
body.insertBefore(rgbRandom,container);
rgbRandom.textContent = "RGB random";

const blackButton = document.createElement("button");
body.insertBefore(blackButton, container);
blackButton.textContent = "Black color";

const eraserButton = document.createElement("button");
body.insertBefore(eraserButton,container);
eraserButton.textContent = "Eraser";

    let eraserMode = false;
        eraserButton.addEventListener("click",()=>{
            blackMode = false;
            rgbMode = false;
            eraserMode = true;
        });
        
    let rgbMode = false;
            rgbRandom.addEventListener("click",()=>{
                eraserMode = false;
                blackMode = false;
                rgbMode = true;
            });
                
    let blackMode = false;
        blackButton.addEventListener("click", ()=>{
            eraserMode = false;
            rgbMode = false;
            blackMode = true;
        });

function gridShow(userInput){
    userInput = prompt("Enter the grid: ");
        if (userInput === ""||
             userInput=== null){
            alert("wrong input");
             }
        userInput = Number(userInput);
        if (userInput>100 || userInput<1 
            || isNaN(userInput)){

            alert("wrong input");

        }else{
            container.innerHTML = "";
            makeRows(userInput);
            makeColumns(userInput);
        }
}

