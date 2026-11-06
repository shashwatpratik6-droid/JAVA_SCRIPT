//unary operators
let a=5;
let b=10;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)

//increment

console.log("a++=",a++) 
console.log("++a=",++a)
console.log(a)


//decrement

console.log("a--=",a--) 
console.log("--a=",--a)
console.log(a)

//assignment operators
console.log(a+=1)
console.log(a-=1)
console.log(a*=1)
console.log(a/=1)
console.log(a%=2) 
console.log(a**=2) 

//comparision operators
console.log(a==b)
console.log(a===b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

// conditional if statement
// let mode=prompt()
// let color;

// if (mode==="dark"){
//     color="background color black"
// }

// if (mode==="light"){
//     color="background color white"
// }
// console.log(color)



// conditional if statement
let mode=prompt();
let color;

if (mode==="dark"){
    color="background color black"
}
else{
    color="background color white"
}
console.log(color)

// conditional else if
let age=22;
if (age>=18){
    console.log("Eligible")
}
else if (age>=60){
    console.log("senior")
}
else{
    console.log("Not eligible")
}

