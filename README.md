# Sorting
Simple sorting algorithm application to practice using interfaces in TypeScript and NodeJS. Implement the sorting algorithm once and reuse it as much as possible for different data types.

## tsc Compiler Config
`tsc --init` which creates the 'tsconfig.json' file. A lot of options but what we want is to specify our build and source directory. By default, tsc will compile the js file in the same directory.
We can now modify `"rootDir": "./src"` and `"outDir": "./build"`.

`tsc -w` 'Watch' flag which will recompile if it see the files in src have been modified.

### Additional tooling to automate nodejs compilation
`npm init -y`

`npm install nodemon concurrently` 
- nodemon - rerun node everytime there is a file change
- concurrently - run multiple scripts. (start tsc, nodemon to execute code)

Script inside of package.json
```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

`npm start` should see the two scripts running now.

## The Problem
Each type requires a different implementation of the sorting algorithm. For example, character comparisons are done through ASCII so can't do a logical compare with strings. Strings are also immutable so need a different way to swap.

If we union all the valid types going into the sorter then TypeScript will take the common properties between them. This restricts it so much we lose functionality needed for the algorithm.

A solution is to use 'type guards'.
```
if (this.collection instanceof Array) {
	// do number version of sorting algo
}

if (typeof this.collection === 'string') {
	// do string version of sorting algo
}
```
Once the object passes the type guard, TypeScript allows you to use those methods. Use 'typeof' for primitives: number, string, bool. 

This is ***bad*** code though. Would need new implementation of the algo for each new type in this single class.

## Solution
Abstract the specific data handling away into it's own separate class. The Sorter class is generic. Each type will have it's own separate class with its own way of handling compare and swap.

```
interface Sortable {
    length: number;
    compare( leftIndex: number, rightIndex:number ): boolean;
    swap( leftIndex: number, rightIndex: number): void;
}
```

```
export class Sorter {
    constructor(public collection: Sortable) {}

    sort(): void{
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
```

As long as the collection meets the interface definition above then it is possible to sort it in our generic bubble sort algorithm. The significance of this is that we don't need to know how to sort the unique data types. If we can implement compare and swap than it can be sorted!

