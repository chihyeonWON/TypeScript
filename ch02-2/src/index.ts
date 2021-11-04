const testMakePerson = (): void => {
    let jane: Iperson = makePerson('Jane')
    let jack: Iperson = makePerson('Jack')
    console.log(jane, jack)
}

testMakePerson()
