import { createRangeIterable } from "./createRangeIterable"
const iterator = createRangeIterable(1, 3 + 1) // 반복기는 현재 동작하지 않는다
while(true) {
    const {value, done} = iterator.next() // 반복기를 동작시킨다
    if(done) break
    console.log(value) // 1 2 3 
}