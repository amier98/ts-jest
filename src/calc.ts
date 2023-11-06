//step one: convert number to roman numeral

// roman numerals - 1 to 3 are labeled I
// from 4 onwards, they use V - so 4 is IV
// so if number is greater than 5, you add I

//while loops maybe

export function convertRoman(nums: number) {
  let roman = "";

  const obj = {
    M: 1000,
    DM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let every in obj) {
    while (nums >= obj[every]) {
      roman += every;
      nums -= obj[every];
    }
  }
  // if (nums === 9) {
  //   return "IX";
  // }
  // if (nums === 4) {
  //   return "IV";
  // }

  return roman;
}
