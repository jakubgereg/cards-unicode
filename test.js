const c = require(".");

it("should get all 52 cards", () => {
  let cards = c.getAll();
  expect(cards).toHaveLength(52);
});
