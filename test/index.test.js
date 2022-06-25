describe("makePoniesPink", () => {
    beforeAll(() => {
        /* Runs before all tests */
    });
    afterAll(() => {
        /* Runs after all tests */
    });
    beforeEach(() => {
        /* Runs before each test */
    });
    afterEach(() => {
        /* Runs after each test */
    });
    const actual = ["Alice", "Bob", "Eve"];

    test("make each pony pink", () => {
        expect(actual).toEqual(actual);
    });
    it("make each pony pink", () => {
        expect(actual).toEqual(actual);
    });
    // describe.skip
    // test.skip
    // describe.only
    // test.only

test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
];

test("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
}
test("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
test("should modify a object", () => {
    const data = {
        foo: "bar"
    };
    data["baz"] = "fuu";
    expect(data).toEqual({
        foo: "bar",
        baz: "fuu"
    });
});
expect.extend({
    toBeDivisibleBy(received, argument) {
        const pass = received % argument == 0;
        if (pass) {
            return {
                pass: true,
                message: () =>
                    `expected ${received} not to be divisible by ${argument}`,
            };
        } else {
            return {
                pass: false,
                message: () => `expected ${received} to be divisible by ${argument}`,
            };
        }
    },
});
describe("Name of the group", () => {
    expect({
        a: 1
    }).toHaveProperty("a");
    expect({
        a: 1
    }).toHaveProperty("a", 1);
    expect({
        a: {
            b: 1
        }
    }).toHaveProperty("a.b");
    expect({
        a: 1,
        b: 2
    }).toMatchObject({
        a: 1
    });
    expect({
        a: 1,
        b: 2
    }).toMatchObject({
        a: expect.any(Number),
        b: expect.any(Number),
    });
    expect([{
        a: 1
    }, {
        b: 2
    }]).toEqual([
        expect.objectContaining({
            a: expect.any(Number)
        }),
        expect.anything(),
    ]);
});
test("even and odd numbers", () => {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
});
describe('mock', () => {
    const fn = jest.fn()
    fn()
    expect(fn).toBeCalled() // Function was called
    expect(fn).not.toBeCalled() // Function was *not* called
    expect(fn).toHaveBeenCalledTimes(1) // Function was called only once
    expect(fn).toBeCalledWith(arg1, arg2) // Any of calls was with these arguments
    expect(fn).toHaveBeenLastCalledWith(arg1, arg2) // Last call was with these arguments
    expect(fn).toHaveBeenNthCalledWith(callNumber, args) // Nth call was with these arguments (Jest 23+)
    expect(fn).toHaveReturnedTimes(2) // Function was returned without throwing an error (Jest 23+)
    expect(fn).toHaveReturnedWith(value) // Function returned a value (Jest 23+)
    expect(fn).toHaveLastReturnedWith(value) // Last function call returned a value (Jest 23+)
    expect(fn).toHaveNthReturnedWith(value) // Nth function call returned a value (Jest 23+)
    expect(fn.mock.calls).toEqual([
        ['first', 'call', 'args'],
        ['second', 'call', 'args'],
    ]) // Multiple calls
    expect(fn.mock.calls[0][0]).toBe(2) // fn.mock.calls[0][0] — the first argument of the first call
});
});
