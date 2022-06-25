require('expect-more-jest');
describe('expect-more-jest', () => {
    it('makes your tests and output easier to read', () => {
      expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
      expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
      expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
      expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
      expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
      expect([12, 0, 14]).toBeArrayOfNumbers();
      expect([{}, new Object()]).toBeArrayOfObjects();
      expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
      expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
      expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toBeArrayOf({
        name: expect.toBeNonEmptyString(),
      });
      expect([2, true, 'string']).toBeArray();
      expect(async () => {
        await fetch('...');
      }).toBeAsyncFunction();
      expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
      expect(false).toBeBoolean();
      expect('100').toBeCalculable();
      expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
      expect(new Date('2021-08-29')).toBeDateInMonth(7);
      expect(new Date('2021-08-29')).toBeDateInYear(2021);
      expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
      expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
      expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
      expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
      expect(new Date('2019-12-31')).toBeDate();
      expect(12.55).toBeDecimalNumber();
      expect(12).toBeDivisibleBy(2);
      expect([]).toBeEmptyArray();
      expect({}).toBeEmptyObject();
      expect('').toBeEmptyString();
      expect(2).toBeEvenNumber();
      expect(false).toBeFalse();
      expect(() => 'i am a function').toBeFunction();
      expect(function* gen() {
        yield 'i am a generator';
      }).toBeGeneratorFunction();
      expect('1999-12-31T23:59:59').toBeIso8601();
      expect('{"i":"am valid JSON"}').toBeJsonString();
      expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
      expect(-18).toBeNegativeNumber();
      expect(undefined).toBeNil();
      expect(['i', 'am not empty']).toBeNonEmptyArray();
      expect({ i: 'am not empty' }).toBeNonEmptyObject();
      expect('i am not empty').toBeNonEmptyString();
      expect({ x: 12, y: 22 }).toBeNullableOf({
        x: expect.toBeNumber(),
        y: expect.toBeNumber(),
      });
      expect(null).toBeNullableOf({
        x: expect.toBeNumber(),
        y: expect.toBeNumber(),
      });
      expect(8).toBeNumber();
      expect({}).toBeObject();
      expect(5).toBeOddNumber();
      expect({ x: 12, y: 22 }).toBeOptionalOf({
        x: expect.toBeNumber(),
        y: expect.toBeNumber(),
      });
      expect(undefined).toBeOptionalOf({
        x: expect.toBeNumber(),
        y: expect.toBeNumber(),
      });
      expect(5).toBePositiveNumber();
      expect(new RegExp('i am a regular expression')).toBeRegExp();
      expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
      expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
      expect('i am a string').toBeString();
      expect(true).toBeTrue();
      expect(new Date('2020-01-01')).toBeValidDate();
      expect('i am visible').toBeVisibleString();
      expect({}).toBeWalkable();
      expect(' ').toBeWhitespace();
      expect(8).toBeWholeNumber();
      expect(7).toBeWithinRange(0, 10);
      expect('JavaScript').toEndWith('Script');
      expect('JavaScript').toStartWith('Java');
    });
  });