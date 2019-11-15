import { Age } from './../src/age.js';

describe('Age', () => {

  let newAge = new Age("25")

  test('should check if earthAge returns same age', () => {
    expect(newAge.earthAge).toEqual("25");
  });

  test('should check if mercury prototype returns age on mercury', () => {
    newAge.mercury();
    expect(newAge.mercuryAge).toEqual("104.17");
  });
});
