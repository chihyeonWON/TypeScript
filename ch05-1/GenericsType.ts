const arrayLength = <T>(array: T[]): number => array.length // 배열의 길이를 구하는 함수
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0 // 함수와 배열이 비었는지를 판별하는 함수

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name:'Jane', age: 32}]

console.log(
    arrayLength(numArray), // 3
    arrayLength(strArray), // 2
    arrayLength(personArray), // 2
    isEmpty([]), // true
    isEmpty([1]) // false
)
