import { Category } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        current: "2024-05-07",
        recentReleases: [
          "2016-03-21",
          "2017-06-05",
          "2018-10-30",
          "2020-03-18",
          "2021-04-20",
          "2022-10-18",
        ],
      },
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "HomePod Mini",
        current: "2020-10-13",
        recentReleases: [],
        estimatedUpdate: 1825,
      },
    ],
  },
];
