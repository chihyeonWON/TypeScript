import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'
 
const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane')
    let jack: IPerson = makePerson('Jack')
    console.log(jane, jack)
}

testMakePerson()
