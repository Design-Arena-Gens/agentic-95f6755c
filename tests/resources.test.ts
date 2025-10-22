import { describe, expect, it } from "vitest";
import { resources } from "../data/resources";

describe("resource catalog", () => {
  it("covers all four major categories", () => {
    const categories = new Set(resources.map((resource) => resource.category));
    expect(Array.from(categories).sort()).toEqual(["Build", "Design", "Launch", "Learn"]);
  });

  it("only includes secure links", () => {
    resources.forEach((resource) => {
      expect(resource.url.startsWith("https://")).toBe(true);
    });
  });
});
