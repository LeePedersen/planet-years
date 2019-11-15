import { Age } from './../src/age.js';
import { Expectancy } from './../src/expectancy.js';

describe('Expectancy', () => {

  const newExpectancy = new Expectancy("25", "moderate", "9000", "cismale");

  test('should check if program returns life expectancy on other planets', () => {
    let newAge = new Age(newExpectancy.expectCalc());
    newAge.mercury();
    expect(newAge.mercuryAge).toEqual("125.00");
  });
});
