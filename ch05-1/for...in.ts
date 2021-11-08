// 배열에서의 for ...in 구문 사용
let names = ['Jack', 'Jane', 'Steve']

for(let index in names) {
    const name = names[index]
    console.log(`[${index}: ${name}]`) // [0]: Jack [1]: Jane [3]: Steve
}

// 객체에서의 for ...in 구문 사용

let jack = {name: 'Jack', age: 32}
for(let property in jack) {
    console.log(`${property}: ${jack[property]}`) // name: Jack age: 32
}