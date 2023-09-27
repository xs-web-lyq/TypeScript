// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a, b }:{a:string,b:number} = o;
// console.log(a,b)

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(a,b)
}
keepWholeObject({a:'liu',b:110})
