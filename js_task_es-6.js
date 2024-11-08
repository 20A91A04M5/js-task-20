
//---- Maximum number using CAB methods....-----//

////---------using call-------///

let arr=[10,20,30,15,5]
// console.log(Math.max.call(...arr))
console.log(Math.max.call(null,...arr))
// console.log(Math.max(...arr))

//-----using apply -------------///

let arr1=[10,20,30,15,45]
console.log(Math.max.apply(null,[...arr1]))
console.log(Math.max.apply(null,[...arr1,66,4,56,78,66]))

//---------using bind -----------///

let arr2=[22,11,4,55,6,5,4,45,66]
// let binds=Math.max.bind(null,...arr2)
let binds=Math.max.bind(...arr2)
console.log(binds())
