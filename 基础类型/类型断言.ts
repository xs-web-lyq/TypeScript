
// <>尖括号语法
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
console.log(strLength)
// as语法
let strLength1: number = (someValue as string).length
console.log(strLength)