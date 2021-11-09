// 객체와 배열은 얇은 복사 shallow copy 방식으로 동작
const originalArray = [5, 3, 9, 7]
const shallowCopiedArray = originalArray
shallowCopiedArray[0] = 0
console.log(originalArray, shallowCopiedArray) // [0, 3, 9, 7] [0, 3, 9, 7] 복사된 배열과 원본 배열의 0번째 인덱스의 값이 모두 0으로 변경됨 