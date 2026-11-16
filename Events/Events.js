let x = document.querySelector('.box')
// box.onclick = () => {
//     console.log("hello")
//     let a = 4
//     a++
//     console.log(a)
// }
x.onmouseover = () => {
    console.log("The div was howered")
}


let y = document.querySelector('#btn2')
y.ondblclick = () => {
    console.log("Button was double clicked");
    let a = 80;
    a++;
    console.log(a)
}

let z = document.querySelector('#btn1')
z.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX,evt.clientY)
}

