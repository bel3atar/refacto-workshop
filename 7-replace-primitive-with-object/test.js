const { Priority, getOrdersWithPriorityHigherThanLow } = require(".");
describe("getOrdersWithPriorityHigherThan function", () => {
  const fakeOrders = [
    { id: 1, priority: "high" },
    { id: 2, priority: "medium" },
    { id: 3, priority: "low" },
    { id: 4, priority: "medium" }
  ];
  it("should filter orders correclty", () =>
    expect(
      getOrdersWithPriorityHigherThanLow(fakeOrders).map(({ id }) => id)
    ).toStrictEqual([1, 2, 4]));
});

xdescribe("Priority class", () => {
  it("should function correctly", () => {
    expect(String(new Priority("medium"))).toBe("medium");
    expect(Number(new Priority("medium"))).toBe(1);
    expect(`p${new Priority("low")}`).toBe("plow");
    expect(new Priority("low") < new Priority("medium"));
    expect(new Priority("low") < new Priority("high"));
    expect(new Priority("low") > new Priority("high")).toBe(false);
    expect(new Priority("low") > new Priority("high")).toBe(false);
    expect(new Priority("medium") < new Priority("high"));
    expect(new Priority("high") <= new Priority("high"));
    expect(new Priority("medium").equals(new Priority("medium")));
    expect(() => new Priority("xxxx")).toThrow(Error);
  });
});
