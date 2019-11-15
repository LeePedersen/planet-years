import { AgeExpect } from './../src/ageExpect.js';

describe('AgeExpect', () => {

  let newAge = new AgeExpect("25", "none", "12000", "cisfemale");

  test('should check if earthAge returns same age', () => {
    expect(newAge.age).toEqual("25");
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

  test('should check if earthExpect returns life expectancy in earth years', () => {
    newAge.expectCalc();
    expect(newAge.earthExpect).toEqual(50);
  });

  test('should check if jupiter prototype returns age on jupiter', () => {
    newAge.expectCalc();
    newAge.jupiter();
    expect(newAge.jupiterAge).toEqual("2.11");
  });

  test('should check if jupiter prototype returns life expectancy on jupiter', () => {
    newAge.expectCalc();
    newAge.jupiter();
    expect(newAge.jupiterExpect).toEqual("4.22");
  });

  test('should check if mars prototype returns life expectancy on mars', () => {
    newAge.expectCalc();
    newAge.mars();
    expect(newAge.marsExpect).toEqual("26.60");
  });

  test('should check if earthExpect returns amount over life expectancy in earth years as a negative number', () => {
    let newPerson = new AgeExpect("80", "none", "12000", "cisfemale");
    newPerson.expectCalc();
    expect(newPerson.earthExpect).toEqual(-5);
  });

  test('should check if mars prototype returns amount over life expectancy in mars years as a negative number', () => {
    let newPerson = new AgeExpect("80", "none", "12000", "cisfemale");
    newPerson.expectCalc();
    newPerson.mars();
    expect(newPerson.marsExpect).toEqual("-2.66");
  });
});
