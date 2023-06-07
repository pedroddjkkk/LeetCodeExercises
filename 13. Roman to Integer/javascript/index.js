/**
 * @param {string} s
 * @return {number}
 */
const symbols = [
  {
    symbol: "I",
    value: 1,
    subtract: true,
  },
  {
    symbol: "V",
    value: 5,
  },
  {
    symbol: "X",
    value: 10,
    subtract: true,
  },
  {
    symbol: "L",
    value: 50,
  },
  {
    symbol: "C",
    value: 100,
    subtract: true,
  },
  {
    symbol: "D",
    value: 500,
  },
  {
    symbol: "M",
    value: 1000,
  },
];

var romanToInt = function (s) {
  let result = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const nextElement = s[index + 1];
    let add = 0;

    symbols.forEach((symbol, index) => {
      if (
        symbol.subtract &&
        (nextElement == symbols[index + 1].symbol ||
          nextElement == symbols[index + 2].symbol)
      ) {
        add = -symbol.value;
        return;
      }
      if (symbol.symbol == element) add = symbol.value;
    });

    result += add;
  }

  return result;
};

