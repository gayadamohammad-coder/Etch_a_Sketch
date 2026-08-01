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
            column.addEventListener("mouseover", ()=>{
              column.style.backgroundColor = "black";
        });
        }

        
    }
}
const gridButton = document.createElement("button");
body.insertBefore(gridButton, container);
gridButton.textContent="grid size";
gridButton.addEventListener("click",gridShow);
function gridShow(userInput){
    userInput = prompt("Enter the grid: ");
        if (userInput>100|| userInput<0||userInput === ""){
            alert("wrong input");
        }else{
            container.innerHTML = "";
            makeRows(userInput);
            makeColumns(userInput);
        }
}
