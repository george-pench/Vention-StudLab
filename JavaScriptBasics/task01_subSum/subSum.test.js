const subSum = require("./subSum");
const message =
  "Finds a continuous subarray whose sum of elements is the maximum";

describe("SubSum Tests", () => {
  test(message, () => {
    expect(subSum([-1, 2, 3, -9])).toBe(5);
  });

  test(message, () => {
    expect(subSum([2, -1, 2, 3, -9])).toBe(6);
  });

  test(message, () => {
    expect(subSum([-1, 2, 3, -9, 11])).toBe(11);
  });

  test(message, () => {
    expect(subSum([-2, -1, 1, 2])).toBe(3);
  });

  test(message, () => {
    expect(subSum([100, -9, 2, -3, 5])).toBe(100);
  });

  test(message, () => {
    expect(subSum([1, 2, 3])).toBe(6);
  });

  test(message, () => {
    expect(subSum([-1, -2, -3])).toBe(0);
  });
});
