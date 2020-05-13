const d = require(".");

it("should draw one element from array", () => {
  let colors = ["red", "blue", "green"];
  d(colors);
  expect(colors).toHaveLength(2);
});

it("should draw different element each time", () => {
  let colors = ["red", "blue", "green", "yellow", "teal"];
  expect(d(colors)).not.toEqual(d(colors));
});
