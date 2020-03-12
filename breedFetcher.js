const request = require('request');
// const readline = require('readline');


const fetchBreedDescription = (breedName, callback) => {


  request(`${'https://api.thecatapi.com/v1/breeds/search?q='}${breedName}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);

      if (data[0] === undefined) {
        callback(`This is is not a valid breed name`);
      } else {
        callback(null, data[0].description.trim());
      }
    }
  });

};

module.exports = {
  fetchBreedDescription
};