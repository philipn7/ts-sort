import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'

// const numbersCollection = new NumbersCollection([10, 11, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('arstueneincxEINYITAA');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data); 