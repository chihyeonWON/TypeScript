class Person1 { // class 키워드 class이름
    name: string //속성이름: 속성타입
    age?: number
}

let jack1: Person1 = new Person1() //
jack1.name = 'Jack';
jack1.age = 32
console.log(jack1) // Person1 { name: 'Jack', age: 32}