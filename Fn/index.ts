// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// function add(a:number,b:number):number {
//     return a + b
// }
// 2.函数默认的参数 | 函数可选参数
const add1 = (a:number = 10,b = 1):number => {
    return a + b
}
console.log(add1(1,3))


// 3.参数是一个对象如何定义
interface User {
    name:string
    age:number
}
function add(user:User){
    return user
}
console.log(add({name:'liu',age:23}))


// 4.函数this类型

interface Obj {
    user:number[]
    add:(this:Obj,num:number)=>void
}
// ts 可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型
let obj:Obj = {
    user:[1,2,3,4],
    add(this:Obj,num:number){
        this.user.push(num)
    }
}
// 5.函数重载

let user:number[] = [1,2,3]
// function findNum(add:number[]):number[]
// function findNum(id:number):number[]
// function findNum():number[]
function findNum(ids?:number | number[]):number[]{
    if(typeof ids == 'number'){
        return user.filter(v => v == ids)

    }else if(Array.isArray(ids)){
        user.push(...ids)
        return user
    }else{
        return user
    }
}

console.log(findNum([1,2,3]))


