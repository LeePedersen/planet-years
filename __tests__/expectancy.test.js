import { Expectancy } from "./../src/expectancy.js";

describe('Expectancy', () => {

  const newExpectancy = new Expectancy(25);

  test('should check if expectancy class returns expectancy on earth', () => {
    newAge.aveExpectancy();
    expect(newExpectancy.earthAve).toEqual(50);
  });

  test('should check if expectancy class returns expectancy on mercury', () => {
    newExpectancy.aveExpectancy();
    expect(newExpectancy.mercuryAve).toEqual("208.33");
  });

  test('should check if expectancy class returns expectancy on venus, mars, and jupiter', () => {
    newExpectancy.aveExpectancy();
    expect(newExpectancy.mercuryAve).toEqual("208.33");
    expect(newExpectancy.mercuryAve).toEqual("208.33");
    expect(newExpectancy.mercuryAve).toEqual("208.33");
  });
});
