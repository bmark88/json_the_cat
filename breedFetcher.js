const request = require('request');
// const readline = require('readline');

const breedName = process.argv.slice(2)[0];

request(`${'https://api.thecatapi.com/v1/breeds/search?q='}${breedName}`, (err, response, body) => {
  if (err) {
    console.log('err', err);
  } else {
    const data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log(`${breedName} is is not a valid breed name`);
    }
    console.log(data[0].description);
  }
});