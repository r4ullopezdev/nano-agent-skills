import { createSkill, demoSkills, SkillRegistry } from "../src/index.js";

const registry = new SkillRegistry();
demoSkills.forEach((skill) => registry.register(skill));
registry.register(
  createSkill({
    id: "decision-log",
    description: "Creates a simple decision log entry.",
    run: ({ task, input }) => ({
      summary: `Logged decision for '${task}'.`,
      output: {
        owner: input.owner ?? "unknown",
        decision: input.decision ?? "undocumented"
      }
    })
  })
);

const result = await registry.run("decision-log", "Launch review", {
  owner: "research-manager",
  decision: "Proceed with alpha release"
});

console.log(result);

