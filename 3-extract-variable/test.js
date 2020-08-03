const calculatePrice = require(".");

describe("calculatePrice function", () => {
  it("calculates the correct value when we order less than 500 items", () =>
    expect(calculatePrice({ quantity: 100, itemPrice: 1 })).toBe(110));
  it("calculates the correct value when we order more than 500 items", () =>
    expect(calculatePrice({ quantity: 600, itemPrice: 1 })).toBe(656));
  it("calculates the correct value when we order more than 500 items", () => {
    expect(calculatePrice({ quantity: 600, itemPrice: 1 })).toBe(656);
    expect(calculatePrice({ quantity: 6000, itemPrice: 1 })).toBe(5880);
  });
});
