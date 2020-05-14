let h = require("./helpers");

function getAll() {
  let result = [];
  let { suits, values } = h._getData();
  suits.forEach(({ suitId }) => {
    values.forEach(({ valId }) => {
      result.push(h._getCard(suitId, valId));
    });
  });

  return result;
}

function getById(cardId) {
  let suitId = 1;
  let valId = 1;
  let { values } = h._getData();
  if (cardId <= values.length) valId = cardId;
  else {
    suitId = Math.ceil(cardId / values.length);
    valId = -values.length * suitId + values.length + cardId;
  }
  return h._getCard(suitId, valId);
}

function getByNumberAndSuit(number, suit) {
  let numberId = h._numberParser(number);
  let suitId = h._suitParser(suit);
  let cardId = h._getCardId(suitId, numberId);
  return getById(cardId);
}

function getAllBySuit(suit) {
  let result = [];
  let suitParsed = h._suitParser(suit);
  if (!suitParsed) throw "Incorrect suit identificator - Try 'Hearts' or '♥'";

  let { values } = h._getData();

  values.forEach(({ valId }) => {
    result.push(h._getCard(suitParsed, valId));
  });

  return result;
}

function getAllByNumber(number) {
  let result = [];
  let numberParsed = h._numberParser(number);
  if (!numberParsed) throw "Incorrect number identificator - Try 'A' or '1'";

  let { suits } = h._getData();
  suits.forEach(({ suitId }) => {
    result.push(h._getCard(suitId, numberParsed));
  });

  return result;
}

// console.log(getAllByNumber("K"));
console.log(getByNumberAndSuit("J", "♣"));

module.exports = {
  getAll,
  getAllBySuit,
  getById,
  getAllByNumber,
  getByNumberAndSuit,
};
