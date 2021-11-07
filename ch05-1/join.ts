const join = (strArray: string[], delim: string = ''): string => strArray.join(delim) // join 사용법 join(구분자: string[]): string

console.log(
    join(['h','e','l','l','o']), // hello
    join(['h','e','l','l','o'],'_') // h_e_l_l_o
)