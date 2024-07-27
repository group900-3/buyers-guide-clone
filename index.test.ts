import { addDays, subDays } from "date-fns";
import { getDateStringAndDifference, getSuggestion, stringToUTCDate } from ".";
import { products } from "./AppleProducts";
import { describe, expect, it } from "vitest";
import { Conclusion, Product } from "./types";

/**
 * average 495
 * 33% 165
 * 66% 330
 * 83% 412
 */
const iPadPro: Product = {
  name: "iPad Pro",
  releases: [
    "2024-05-07",
    "2022-10-18",
    "2021-04-20",
    "2020-03-18",
    "2018-10-30",
    "2017-06-05",
    "2016-03-21",
  ],
};

const HomePodmini: Product = {
  name: "HomePod Mini",
  releases: ["2020-11-16"],
  estimatedUpdate: 1825,
};

const May7th = new Date(Date.UTC(2024, 4, 7));
const _160DaysLater = addDays(May7th, 160);
const _170DaysLater = addDays(May7th, 170);
const _410DaysLater = addDays(May7th, 410);
const _420DaysLater = addDays(May7th, 420);

const Nov16th = new Date(Date.UTC(2020, 10, 16));
const _1500DaysLater = addDays(Nov16th, 1500);

it("should get correct conclusion.", () => {
  expect(getSuggestion(iPadPro, _160DaysLater).conclusion).toBe(
    Conclusion.BUY_NOW
  );
  expect(getSuggestion(iPadPro, _170DaysLater).conclusion).toBe(
    Conclusion.NEUTRAL
  );
  expect(getSuggestion(iPadPro, _410DaysLater).conclusion).toBe(
    Conclusion.CAUTION
  );
  expect(getSuggestion(iPadPro, _420DaysLater).conclusion).toBe(
    Conclusion.DONT_BUY
  );
});
it("should convert yyyy-mm-dd to UTC Date.", () => {
  expect(stringToUTCDate("2024-05-07")).toEqual(new Date(Date.UTC(2024, 4, 7)));
});
it("should return correct distance in days.", () => {
  expect(
    getDateStringAndDifference(subDays(new Date(), 1), new Date())[1]
  ).toBe(1);
});

it("should get correct release span average.", () => {
  expect(getSuggestion(iPadPro, _160DaysLater).average).toBe(495);
  expect(getSuggestion(iPadPro, _410DaysLater).average).toBe(495);
});

it("should get correct conclusion when there is no recent releases.", () => {
  expect(getSuggestion(HomePodmini, _1500DaysLater).conclusion).toBe(
    Conclusion.CAUTION
  );
});
