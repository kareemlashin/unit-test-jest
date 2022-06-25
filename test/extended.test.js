let matchers =require('jest-extended');
expect.extend(matchers);

test('passes when using an asymmetrical matcher', () => {
    expect([]).toEqual(expect.toBeArray());
  });
  test('passes when given an empty string', () => {
    expect('').toBeEmpty();
    expect('hello').not.toBeEmpty();
  });
  test('passes when given an empty string', () => {
    expect('').toBeEmpty();
    expect('hello').not.toBeEmpty();
  });
  
  test('passes when given an empty array', () => {
    expect([]).toBeEmpty();
    expect(['hello']).not.toBeEmpty();
  });
  
  test('passes when given an empty object', () => {
    expect({}).toBeEmpty();
    expect({ hello: 'world' }).not.toBeEmpty();
  });
  test('passes when value is in given array', () => {
    expect(1).toBeOneOf([1, 2, 3]);
    expect(4).not.toBeOneOf([1, 2, 3]);
  });
  test('passes when value is null or undefined', () => {
    expect(null).toBeNil();
    expect(undefined).toBeNil();
    expect(true).not.toBeNil();
  });
  test('passes when value is an array', () => {
    expect([]).toBeArray();
    expect([1]).toBeArray();
    expect(true).not.toBeArray();
  });
  test('passes when value is an array', () => {
    expect([]).toBeArrayOfSize(0);
    expect([1]).toBeArrayOfSize(1);
    expect(true).not.toBeArrayOfSize(1);
  });
  test('passes when given array values match the members of the set', () => {
    expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
    expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
  });
  test('passes when value is a boolean', () => {
    expect(false).toBeBoolean();
    expect(true).toBeBoolean();
    expect(1 === 1).toBeBoolean();
    expect(1).not.toBeBoolean();
  });
  test('passes when input is in given date range', () => {
    expect(new Date('01/01/2019')).not.toBeBetween(new Date('05/01/2019'), new Date('10/01/2019'));
   });
   it('calls mock1 before mock2', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
  
    mock1();
    mock2();
    mock1();
  
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });