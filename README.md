# Sorting
Simple sorting algorithm application to practice using interfaces in TypeScript and NodeJS. Implement the sorting algorithm once and reuse it as much as possible for different data types.

## tsc compiler config
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