let data = require("./data.json");

function getAll() {
  let result = [];
  let { suits, values } = data;
  suits.forEach((suit) => {
    values.forEach((value) => {
      result.push({
        id: (suit.suitId - 1) * values.length + value.valId,
        cardName: `${value.text} of ${suit.text}`,
        cardDisplay: `${value.display}${suit.display}`,
        suitSymbol: suit.display,
        cardNumber: value.display,
      });
    });
  });

  return result;
}

module.exports = {
  getAll,
};
