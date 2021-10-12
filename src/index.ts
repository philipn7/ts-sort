import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 11, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);