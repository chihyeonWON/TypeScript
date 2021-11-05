class Person2 {
    constructor(public name: string, public age?: number) {} // constructor 메서드의 매개변수로 name:string, age?: number 을 줬다.
}
let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2) // Person2 { name: 'Jack', age: 32}