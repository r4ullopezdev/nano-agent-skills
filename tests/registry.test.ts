import { describe, expect, test } from "vitest";
import { demoSkills } from "../src/demoSkills.js";
import { SkillRegistry } from "../src/registry.js";

describe("SkillRegistry", () => {
  test("registers and executes demo skills", async () => {
    const registry = new SkillRegistry();
    demoSkills.forEach((skill) => registry.register(skill));

    const result = await registry.run("task-classifier", "Support inbox cleanup", {});

    expect(result.output.category).toBe("support");
    expect(registry.list()).toHaveLength(5);
  });
});

