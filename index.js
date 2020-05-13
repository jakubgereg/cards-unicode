let data = require("./data.json");

function getAll() {
  let result = [];
  let { suits, values } = data;
  suits.forEach(({ suitId }) => {
    values.forEach(({ valId }) => {
      result.push({
        id: (suitId - 1) * values.length + valId,
        cardName: `${values[valId - 1].text} of ${suits[suitId - 1].text}`,
        cardDisplay: `${values[valId - 1].display}${suits[suitId - 1].display}`,
      });
    });
  });

  return result;
}

module.exports = {
  getAll,
};
