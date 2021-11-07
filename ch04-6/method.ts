class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(`value: ${this.value}`)
    }
}

let a: A = new A
A.method() // value:1