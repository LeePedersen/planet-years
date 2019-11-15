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

  test('should check if venus prototype returns age on venus', () => {
    newAge.venus();
    expect(newAge.venusAge).toEqual("40.32");
  });

  test('should check if mars prototype returns age on mars', () => {
    newAge.mars();
    expect(newAge.marsAge).toEqual("13.30");
  });

  test('should check if jupiter prototype returns age on jupiter', () => {
    newAge.jupiter();
    expect(newAge.jupiterAge).toEqual("2.11");
  });

  test('should check if expectancy prototype returns expectancy on earth', () => {
    newAge.expectancy();
    expect(newAge.earthExpect).toEqual(50);
  });

  test('should check if expectancy prototype returns expectancy on mercury', () => {
    newAge.expectancy();
    expect(newAge.mercuryExpect).toEqual("208.33");
  });
});
