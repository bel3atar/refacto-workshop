const { raiseFivePercent, raiseTenPercent } = require(".");
describe("raise functions", () => {
  test("5% raise", () => expect(raiseFivePercent(100)).toBeCloseTo(105));
  test("10% raise", () => expect(raiseTenPercent(100)).toBeCloseTo(110));
});
