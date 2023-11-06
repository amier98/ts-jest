import { convertRoman } from "../src/calc";

describe("tests for romanConvert function", () => {
  it("should return converted numbers to roman numerals", () => {
    expect(convertRoman(3)).toEqual("III");
  });
  it("return roman numeral of 4 ", () => {
    expect(convertRoman(4)).toEqual("IV");
  });
  it("return converted roman numeral to greater than 5", () => {
    expect(convertRoman(5)).toEqual("V");
  });
  it("return converted roman numeral is eight", () => {
    expect(convertRoman(8)).toEqual("VIII");
  });
  it("return roman numeral of 10 ", () => {
    expect(convertRoman(10)).toEqual("X");
  });
  it("return roman numeral of 24 ", () => {
    expect(convertRoman(24)).toEqual("XXIV");
  });
  it("return roman numeral of 23 ", () => {
    expect(convertRoman(23)).toEqual("XXIII");
  });
  it("return roman numeral of 50 ", () => {
    expect(convertRoman(50)).toEqual("L");
  });
  it("return roman numeral of 60 ", () => {
    expect(convertRoman(60)).toEqual("LX");
  });
  it("return roman numeral of 239 ", () => {
    expect(convertRoman(239)).toEqual("CCXXXIX");
  });
  it("return roman numeral of 4 ", () => {
    expect(convertRoman(4)).toEqual("IV");
  });
  it("return roman numeral of 9 ", () => {
    expect(convertRoman(9)).toEqual("IX");
  });
});
