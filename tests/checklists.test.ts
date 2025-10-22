import { describe, expect, it } from "vitest";
import { checklistCategories } from "../data/checklists";

describe("checklist categories", () => {
  it("provides at least three categories", () => {
    expect(checklistCategories.length).toBeGreaterThanOrEqual(3);
  });

  it("every checklist category has actionable items", () => {
    for (const category of checklistCategories) {
      expect(category.items.length).toBeGreaterThanOrEqual(3);
      for (const item of category.items) {
        expect(item.label).toMatch(/\w+/);
        expect(item.tips).toMatch(/\w+/);
      }
    }
  });
});
