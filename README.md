# Cards Unicode

Displays all cards in unicode.

## Install

```shell
yarn add cards-unicode

or

npm install  cards-unicode
```

## Example

```js
let cardsUnicode = require("cards-unicode");

let cardsUnicode = require("./index");

let cards = cardsUnicode.getAll();

let cardUnicode = cards.map(({ cardDisplay }) => {
  return cardDisplay;
});

console.log(...cardUnicode);

//console.log: A♠ 2♠ 3♠ 4♠ 5♠ 6♠ 7♠ 8♠ 9♠ 10♠ J♠ Q♠ K♠ A♥ 2♥ 3♥ 4♥ 5♥ 6♥ 7♥ 8♥ 9♥ 10♥ J♥ Q♥ K♥ A♦ 2♦ 3♦ 4♦ 5♦ 6♦ 7♦ 8♦ 9♦ 10♦ J♦ Q♦ K♦ A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ 10♣ J♣ Q♣ K♣
```
