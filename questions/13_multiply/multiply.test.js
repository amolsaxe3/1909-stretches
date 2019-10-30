const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('x', 'y')).toThrow('Numbers only, no string allowed!');

    expect(() => multiply([])).toThrow('Numbers only, No array allowed!');
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    const retMultiple = multiply(10, 5)
    expect(typeof retMultiple).toBe('number');

    // test that the returned value is correct
    expect(retMultiple).toBe(50);

    // test some other values
    const retMultiple2 = multiply(100, 50)
    expect(retMultiple2).toBe(5000);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 5);
    const results = multiply(randomNumber1, randomNumber2);
    expect(results).toBe(randomNumber1*randomNumber1);
  });
});
