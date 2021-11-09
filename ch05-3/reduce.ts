const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []


let reduceSum: number = range(1, 100 + 1)
    .reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum) // 5050