
// 后端返回值可能为 0 1 需要转换为 true false
function to(n:number | boolean):boolean{
    return !!n // 强转
}

let res = to(1)
console.log(res)

// 联合类型
interface Pople{
    name:string
    age:number
}
interface Man{
    dec:string
}
function nu(man:Pople | Man){
    console.log(man)
}
nu({
    name:'liu',
    age:23,
    dec:''
})