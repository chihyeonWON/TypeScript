const add1 = (a: number, b: number): number => a + b //보통 함수
const add2 = (a: number): (number) => number => (b: number): number => a + b // 고차 함수