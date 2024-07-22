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

enum Conclusion {
  BUY_NOW,
  NEUTRAL,
  CAUTION,
  DONT_BUY,
}

export interface Suggestion {
  name: string;
  conclusion: Conclusion;
  average: number;
  current: [string, number];
  recentRelease: [string, number];
}
