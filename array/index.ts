//number[]
// let arr :number[] = [1,2,5]
// console.log(arr)
//Array<> --- 泛型
// let arr1: Array<string> = ['liu','yong','qi']
// console.log(arr1)
//数组普通类型
// interface X {
//     name:string
//     age?:number
// }
// let arr2:X[] = [{name:'liu',age:23},{name:'ni'}]
// console.log(arr2)
// 定义多维数组
// let arr4:Array<Array<number>> = [[1,2],[2,3]]
// let arr4:number[][] = [[1,2],[2,3]]

// 大杂烩数组any[]
// let arr4:any[] = [1,'liu',true]
// console.log(arr4)


function add(...args:number[]){
    // console.log(arguments)
    let a:A = arguments
    console.log(a)
}
add(1,2,3,4)
interface A {
    callee:Function
    length:number
    [index:number]:any
}
