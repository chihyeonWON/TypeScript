// 깊은 복사를 이용해 매개변수의 불변성을 유지하는 예
let original = 1
let copied = original // copied = 1
copied += 2 // copied = 3
console.log(original, copied) // 1, 3
