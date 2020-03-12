const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('should let us know when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('notValidBreed', (err, desc) => {
      const expectedDesc = `This is is not a valid breed name`;
      assert.equal(expectedDesc, err);
      assert.equal(null, desc);
      done();
    });
  });
  // Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.
});