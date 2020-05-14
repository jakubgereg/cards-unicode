# Cards Unicode

Displays all cards in unicode.

## Install

```shell
yarn add cards-unicode

or

npm install cards-unicode
```

## Usage

```js
let cardsUnicode = require("cards-unicode");
```

## API

### getAll()

#### Example

```js
let cardUnicode = cardsUnicode.getAll().map(({ cardDisplay }) => {
  return cardDisplay;
});

console.log(...cardUnicode);

//console.log: A♠ 2♠ 3♠ 4♠ 5♠ 6♠ 7♠ 8♠ 9♠ 10♠ J♠ Q♠ K♠ A♥ 2♥ 3♥ 4♥ 5♥ 6♥ 7♥ 8♥ 9♥ 10♥ J♥ Q♥ K♥ A♦ 2♦ 3♦ 4♦ 5♦ 6♦ 7♦ 8♦ 9♦ 10♦ J♦ Q♦ K♦ A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ 10♣ J♣ Q♣ K♣
```

### getAllBySuit(suit)

#### Example

```js
console.log(cardsUnicode.getAllBySuit("Heart"));
//You can use symbols instead "♠" "♥" "♦" "♣"
console.log(cardsUnicode.getAllBySuit("♦"));

//console.log:
//  { id: 15,
//     cardName: 'Two of Hearts',
//     cardDisplay: '2♥',
//     suitSymbol: '♥',
//     cardNumber: '2' },
//  { id: 16,
//     cardName: 'Three of Hearts',
//     cardDisplay: '3♥',
//     suitSymbol: '♥',
//     cardNumber: '3' },
//...other
```

### getById(cardId)

#### Example

```js
console.log(getById(52));

//console.log:
// { id: 52,
//   cardName: 'King of Clubs',
//   cardDisplay: 'K♣',
//   suitSymbol: '♣',
//   cardNumber: 'K' }
```

### getAllByNumber(number)

#### Example

```js
console.log(getAllByNumber("K"));

//console.log:
// [ { id: 13,
//     cardName: 'King of Spades',
//     cardDisplay: 'K♠',
//     suitSymbol: '♠',
//     cardNumber: 'K' },
//   { id: 26,
//     cardName: 'King of Hearts',
//     cardDisplay: 'K♥',
//     suitSymbol: '♥',
//     cardNumber: 'K' },
//...other
```

### getByNumberAndSuit(number, suit)

#### Example

```js
console.log(getByNumberAndSuit("J", "♣"));

//console.log:
// { id: 50,
//   cardName: 'Jack of Clubs',
//   cardDisplay: 'J♣',
//   suitSymbol: '♣',
//   cardNumber: 'J' }
```
