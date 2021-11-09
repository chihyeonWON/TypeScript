//매개 변수를 수정하는 불순 함수의 예
function impure1(array: number[]): void {
    array.push(1)
    array.splice(0, 1)
}

// 외부 변수 g를 사용하는 불순 함수의 예
let g = 10
function impure2(x: number) {
    return x + g
}