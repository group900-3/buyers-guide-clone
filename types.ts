export interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  current: string;
  recentReleases: string[];
  estimatedUpdate?: number;
}

export enum Conclusion {
  BUY_NOW,
  NEUTRAL,
  CAUTION,
  DONT_BUY,
}

export interface Suggestion {
  name: string;
  conclusion: Conclusion;
  average: number;
  current: readonly [string, number];
  recentReleases: (readonly [string, number])[];
}
