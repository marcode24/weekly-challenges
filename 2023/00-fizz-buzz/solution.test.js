const fizzBuzz = require('./solution');

describe('Challange 00: Fizz Buzz', () => {
  it('should return a string', () => {
    expect(typeof fizzBuzz()).toBe('string');
  });

  it('should return a string with 100 lines', () => {
    expect(fizzBuzz().split('\n').length).toBe(100);
  });

  it('should return a string with the correct values', () => {
    const resultExpected = '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\n'
    + 'Fizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n'
    + '26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\n'
    + 'Buzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\n'
    + 'Fizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n'
    + '68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n'
    + '82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz'
    + '\n97\n98\nFizz\nBuzz';
    expect(fizzBuzz()).toBe(resultExpected);
  });
});
