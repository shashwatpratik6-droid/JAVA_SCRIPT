// let x = prompt()
// let arr=[]
// // function vowels(x){
// //     for(let value of x){
// //         if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
// //             arr.push(value)
// //         }
// //     }return arr
// // }
// const vowels=(x)=>{
//     for(let value of x){
//         if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
//             arr.push(value)
//         }
//     }return arr
// }
// console.log(vowels(x), arr.length)


// let x = [2,3,4,5,6,7,8,9]
// let num=(val)=>{
//     const sq=val*val
//     console.log(sq)
// }
// x.forEach(num)


// map function
// let x = [2,3,4,5,6,7,8,9]
// let newArr = x.map((val)=>{
//     return val*val
// })
// console.log(newArr)



// filter function
// let x = [2,3,4,5,6,7,8,9]
// let newArr = x.filter((val)=>{
//     return val%2===0
// })
// console.log(newArr)

// let arr = [90,89,94,93,95,74,38,42]
// let newArr = arr.filter((val)=>{
//     return val>90
// })
// console.log(newArr)


let input = Number(prompt("Enter your number"))

function count(input){
    let arr = []
    for(let i = 1;i<=input;i++){
        arr[i]=i
    }
    return arr
}
console.log(count(input));
const output = count(input).reduce((prev,curr)=>{
    return prev+curr
})
console.log(output)
const output2 = count(input).reduce((prev,curr)=>{
    return prev*curr
})
console.log(output2)
