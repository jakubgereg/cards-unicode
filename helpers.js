let data = require("./data.json");

function _getData() {
  return data;
}

function _getCardId(suit, number) {
  let { values } = _getData();
  return (suit - 1) * values.length + number;
}

//parses unicode symbol or text to suitId
//TODO: update this to not use find and use some translation dictionary
function _suitParser(suit) {
  let { suits } = _getData();

  let findOne = suits.find(
    (s) =>
      s.text.toLowerCase().startsWith(suit.toLowerCase()) || s.display === suit
  );
  if (!findOne) throw "_suitParser failed to parse!";
  return findOne.suitId;
}

//parses card symbol or value to cardObj
function _numberParser(number) {
  let { values } = _getData();

  let parsed = Number.parseInt(number);
  if (
    (typeof number !== "number" && typeof parsed !== "number") ||
    isNaN(parsed)
  ) {
    switch (number) {
      case "A":
        parsed = 1;
        break;
      case "J":
        parsed = 11;
        break;
      case "Q":
        parsed = 12;
        break;
      case "K":
        parsed = 13;
        break;
      default:
        throw "Unknown card value try 'A','J','Q' or 'K'";
        break;
    }
  }

  if (parsed < 1 || parsed > values.length)
    throw `_numberParsed failed value ${parsed} exceeds boundaries`;

  return parsed;
}

function _getCard(sId, vId) {
  let { suits, values } = data;
  if (sId && sId > suits.length) throw `SuitID is out of boundries!`;
  if (vId && vId > values.length) throw `ValueID is out of boundries!`;

  let suit = suits.find((el) => el.suitId === sId);
  let value = values.find((el) => el.valId === vId);

  return {
    id: _getCardId(sId, vId),
    cardName: `${value.text} of ${suit.text}`,
    cardDisplay: `${value.display}${suit.display}`,
    suitSymbol: suit.display,
    cardNumber: value.display,
  };
}

module.exports = {
  _getCard,
  _getData,
  _suitParser,
  _numberParser,
  _getCardId,
};
