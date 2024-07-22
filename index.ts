import { Product, Suggestion, Conclusion } from "./types";
import { differenceInDays, format } from "date-fns";

const formatPattern = "MMM d y";

const stringToUTCDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

const getDateStringAndDifference = (current: Date, next: Date) => {
  const display = format(current, formatPattern);
  const diffInDays = differenceInDays(next, current);
  return [display, diffInDays] as const;
};

const getConclusion = (average: number, daysPassed: number) => {
  const oneSixth = average / 6;
  switch (true) {
    case daysPassed < 2 * oneSixth:
      return Conclusion.BUY_NOW;
    case daysPassed < 4 * oneSixth:
      return Conclusion.NEUTRAL;
    case daysPassed < 5 * oneSixth:
      return Conclusion.CAUTION;
    default:
      return Conclusion.DONT_BUY;
  }
};

export const getSuggestion = (product: Product, time: Date): Suggestion => {
  const current = getDateStringAndDifference(
    stringToUTCDate(product.current),
    time
  );

  const recentReleases = product.recentReleases.map(
    (dateString, index, arr) => {
      const next = stringToUTCDate(arr[index + 1] || product.current);
      const current = stringToUTCDate(dateString);
      return getDateStringAndDifference(current, next);
    }
  );

  const average = Math.round(
    recentReleases.reduce((sum, [_, diff]) => sum + diff, 0) /
      recentReleases.length
  );

  const conclusion = getConclusion(
    // prioty use estimated update span to get conclusion
    // there should always be a valid estimatedUpdate Value if some product never updated
    product.estimatedUpdate || average,
    current[1]
  );

  return {
    name: product.name,
    conclusion,
    average,
    current,
    recentReleases,
    estimatedUpdate: product.estimatedUpdate,
  };
};

export const getSuggestionToday = (product: Product) =>
  getSuggestion(product, new Date());
