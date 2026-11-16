let x = document.querySelector('.box')
// box.onclick = () => {
//     console.log("hello")
//     let a = 4
//     a++
//     console.log(a)
// }
// x.onmouseover = (evt) => {
//     console.log("The div was howered")
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY)
// }


// let y = document.querySelector('#btn2')
// y.ondblclick = () => {
//     console.log("Button was double clicked");
//     let a = 80;
//     a++;
//     console.log(a)
// }

let z = document.querySelector('#btn1')
// z.onclick = (evt) => {
//     // console.log(evt)
//     // console.log(evt.type)
//     // console.log(evt.target)
//     // console.log(evt.clientX,evt.clientY)
// }

z.addEventListener("click",() => {
    console.log("btn was clicked-handler1")
})

z.addEventListener("click",() => {
    console.log("btn was clicked-handler2")
})

const handler3 = () => {
    console.log("btn was clicked-handler3")
}

z.addEventListener("click",handler3)

z.addEventListener("click",() => {
    console.log("btn was clicked-handler4")
})

z.removeEventListener("click",handler3)