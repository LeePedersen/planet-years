import { Age } from './../src/age.js';

describe('Age', () => {

  test('should check if earthAge prototype returns same age', () => {
    let newAge = new Age("25")
    let newEarth = newAge.earthAge();
    expect(newEarth).toEqual("25");
  });

});
