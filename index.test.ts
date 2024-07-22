import { products } from "./AppleProducts";
import { describe, expect, it } from "vitest";

const iPadPro = products
  .find((c) => (c.name = "iPhone/iPad"))!
  .products.find((p) => p.name === "iPad Pro")!;

const HomePodmini = products
  .find((c) => (c.name = "Music"))!
  .products.find((p) => p.name === "HomePod Mini")!;

it("should get correct conclusion.", () => {});
it("should convert yyyy-mm-dd to UTC Date.", () => {});
it("should return correct distance in days.", () => {});

it("should get correct release span average.", () => {});

it("should get correct conclusion when there is no recent releases.", () => {});
it("should correctly compute distance from last release to given date.", () => {});
