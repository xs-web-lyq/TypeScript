let isDone:boolean = false
console.log(isDone)
let dec:number = 6;
let hex:number = 0x000a;
let bin:number = 0b1010;
let oct:number = 0o744;
console.log(dec,hex,bin,oct)
let names:string = "bob"
console.log(names)
let age:number = 22
let sentence:string = `Hello,my name is ${names}
    I'll be ${age + 1} years old next month.
 `
 console.log(sentence)

 let list: number[] = [1,2,3];
 let list1: Array<number> = [1,2,3];
 console.log(list,list1)

//  Tuple
let x: [string,number];
x = ['hello',10]
console.log(x)
// let y:[string,number]
// y = [10,'hello']
// console.log(y)
console.log(x[0].slice(1))
console.log(x[1])

// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型