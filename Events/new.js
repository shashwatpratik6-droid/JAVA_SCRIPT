let mode = document.querySelector('#mode')
let currentMode = "light"
mode.addEventListener("click",() => {
    if (currentMode == "light"){
        currentMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("button").style.backgroundColor = "blue";
    }
    else{
        currentMode = "light"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("button").style.backgroundColor = "Red";
    }
    console.log(currentMode)
})