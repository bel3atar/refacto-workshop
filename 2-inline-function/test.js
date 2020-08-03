const getRating = require(".");

describe("getRating function()", () => {
  it("should return 1 if the driver is good", () =>
    expect(getRating({ lateDeliveriesCount: 0 })).toBe(1));
  it("should return 2 if the driver is bad", () =>
    expect(getRating({ lateDeliveriesCount: 6 })).toBe(2));
});
