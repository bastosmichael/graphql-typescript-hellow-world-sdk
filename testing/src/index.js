const sdk = require('typescript-sdk');

const helloWorld = new HelloWorld();

helloWorld
  .query('hello')
  .then((r) => {
    console.log(r)
  });
