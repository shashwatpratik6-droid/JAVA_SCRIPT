// for(let i=0;i<=5;i++) {
//     console.log("Hello World!")
// }
// console.log("loop has ended")


// sum of digits till the number n
// let n = Number(prompt("Enter the number"))
// let sum = 0
// for (let i=1;i<=n;i++){
//     sum+=i
// }
// console.log(sum)

// let i = 1;
// while (i<=5){
//     console.log("hello world")
//     i++
// }

// let n = Number(prompt("Enter the number"))
// let i=0
// let sum=0
// do{
//     sum+=i
//     i++
// }while(i<=n)
// console.log(sum)

// let str = "javaScript"
// let length = 0
// for(let value of str){
//     console.log(value),
//     length++
// }
// console.log(length)


//for- in loop
let student = {
    studentName:"shashwat pratik",
    studentAge: 20,
    CGPA: 8.5
}
for (let key in student){
    console.log("key:",key,"value:",student[key])
}
