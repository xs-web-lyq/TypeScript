function f(condition:boolean) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log(f(false))
console.log(f(true))
 // returns 0
  // returns 100