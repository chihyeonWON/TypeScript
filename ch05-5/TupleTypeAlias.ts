type ResultType = [boolean, string]

const doSomething = (): ResultType => {
    try{
        throw new Error('Some error occurs...')
    } catch(e) {
        return [false, e.massage]
    }
}

const [result, errorMessage] = doSomething()
console.log(result, errorMessage) // false Some error occurs ...