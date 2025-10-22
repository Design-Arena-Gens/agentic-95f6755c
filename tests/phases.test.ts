import { describe, expect, it } from "vitest";
import { phases } from "../data/phases";

describe("phases data", () => {
  it("contains four phases covering the build journey", () => {
    expect(phases).toHaveLength(4);
  });

  it("ensures each phase has deliverables and activities", () => {
    for (const phase of phases) {
      expect(phase.activities.length).toBeGreaterThanOrEqual(3);
      expect(phase.deliverables.length).toBeGreaterThanOrEqual(3);
      expect(phase.summary.length).toBeGreaterThan(30);
    }
  });

  it("includes launch checkpoint", () => {
    const launchPhase = phases.find((phase) => phase.id === "launch");
    expect(launchPhase?.checkpoint).toContain("live");
  });
});
