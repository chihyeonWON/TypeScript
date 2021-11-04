import * as U from '../utils/makeRandomNumber'
export interface Iperson {
    name:string
    age:Number
}

class Peson implements Iperson {
    constructor(public name: string, public age: number) {}
}

export const makePerson = (name:string,
    age:number = U.makeRandomNumber()) => ({name, age})