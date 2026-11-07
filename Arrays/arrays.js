let arrayMarks = [34,56,7,6,46,78,43];
// console.log(arrayMarks);
// console.log(arrayMarks.length);
// for (let i = 0; i<(arrayMarks.length);i++){
//     console.log(arrayMarks[i])
// }

// We generally use for of loop to call arrays.

// for(item of arrayMarks){
//     console.log(item)
// }

let cities = ["Delhi","Mumbai","Ranchi","Patna"]
// for(city of cities){
//     console.log(city.toUpperCase())
// }

// //--------Array Methods---------
// cities.pop()
// cities.push("Indore")
// console.log(cities)
// console.log(cities.toString())
// let con = cities.concat(arrayMarks)
// console.log(con)
// cities.shift()
// cities.unshift("Telangana")
// // let x = cities.slice(0,2)
// // console.log(x)
// cities.splice(0,2,"Hydrabad")
cities.splice(4,0,"Telengana")
console.log(cities)
