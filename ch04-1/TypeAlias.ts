type stringNumberFunc = (string, number) => void // 매개변수 2개와 함수반환값 타입을 새로운 stringNumberFunc이라는 타입으로 바꿔서 사용하게 해주느 type 키워드
let f: stringNumberFunc = function(a: string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}