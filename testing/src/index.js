const HelloWorld = require('typescript-sdk');

// const sdk = require('typescript-sdk');

// console.log(sdk);

const helloWorld = new HelloWorld();

helloWorld
  .query('hello')
  .then((r) => {
    console.log(r)
  });
