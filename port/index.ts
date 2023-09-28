// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
//   let mySquare = createSquare({color: "black",width:15});
//   console.log(mySquare)


//   readonly 用来设置只读属性---只能在对象刚创建时修改其值
  interface Point {
    readonly x :number,
    readonly y :number
  }
  let p1 :Point = {x:10,y:20}
  

let a: number[] = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a
// a = ro //报错，只读属性赋值都是不允许的

// 可以通过使用断言修改类型后进行赋值
a = ro as Array<number>;
console.log(a)

// readonly vs const   如果将值看作属性则使用readonly,看作变量则使用const
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let mySquare = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare)

// 当接口名相等则进行合并
interface SquareConfig {
    name?:string
}
let b:SquareConfig = {
    color:'white',
    width:12,
    name:'liu',
    a:10
}
console.log(b)


// 接口继承
interface B {
    age:number
}
interface A extends B{
    name:string
}
let n: A = {
    age:22,
    name:'liu'
}
console.log(n)

// 定义函数类型
interface Fn {
    (name:string):number[]
}
const fn:Fn = function(name:string){
    return [1]
}
console.log(fn('liu'))
