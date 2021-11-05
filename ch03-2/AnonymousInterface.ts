let ai:{
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}

//함수에 사용된 익명 인터페이스 예
function printMe (me: {name: string, age: number, etc?: boolean}){
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}
printMe(ai)