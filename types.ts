export interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  releases: `${string}-${string}-${string}`[];
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
  estimatedUpdate?: number;
}
