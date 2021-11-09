const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []

let squres: number[] = range(1, 5 + 1)
    .map((val :number) => val * val)
console.log(squres) // [ 1, 4, 9, 16 , 25]