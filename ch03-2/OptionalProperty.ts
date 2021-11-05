interface IPerson2 {
    name: string // 필수 속성
    age: number // 필수 속성
    etc?: boolean // 선택 속성
}

let good1: IPerson2 = {
    name:'Jack',
    age: 32
}

let good2: IPerson2 = {
    name:'Jack',
    age: 32,
    etc: true
}