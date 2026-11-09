let hello = document.querySelector("h2");
console.dir(hello);
hello.innerText = hello.innerText +" from Apna College Students";


let divs = document.querySelectorAll(".Box")
console.dir(divs)

let index = 1
for (div of divs){
    div.innerText=`New unique value ${index}`
    index++;
}
