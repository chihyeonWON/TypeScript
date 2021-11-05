interface IPerson4 { // 인터페이스 IPerson4 구현
    name: string
    age?: number
}

class Person4 implements IPerson4 { // 클래스 Person4가 인터페이스 IPerson4를 구현
    name: string
    age: number
}