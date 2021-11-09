// 순수함수로 만들어주는 타입 수정자 readonly 
// readonly 타입 수정자를 이용하면 매개변수를 변경하려는 시도가 있으면 에러를 반환하여 불순 함수가 되지않게 방지   
function forcePure(array: readonly number[]) {
    array.push(1)
}