enum Color {Red=1, Green=2, Blue=4}
let c: Color = Color.Blue;
console.log(c)

let colorName:string = Color[4]
console.log(colorName)

// any
let notSure:any = 4;
// notSure = "maybe a string instead"
// notSure = false
// console.log(notSure.ifItExists())
// let prettySure: Object = 4;s
// prettySure.toFixed();

function warnUser(): void {
    console.log("This is my warning message");
}
warnUser()
