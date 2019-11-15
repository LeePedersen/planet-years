import { Expectancy } from "./../src/expectancy.js";

describe('Expectancy', () => {

  const newExpectancy = new Expectancy(25, "moderate", "9000", "cismale");

  test('should check if expectancy class returns expectancy on earth', () => {
    let earthExpect = newExpectancy.expectCalc();
    expect(earthExpect).toEqual(30);
  });

});
