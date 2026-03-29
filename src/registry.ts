import type { Skill, SkillResponse } from "./types.js";

export class SkillRegistry {
  private readonly skills = new Map<string, Skill>();

  register(skill: Skill): void {
    this.skills.set(skill.id, skill);
  }

  get(id: string): Skill | undefined {
    return this.skills.get(id);
  }

  list(): Skill[] {
    return [...this.skills.values()];
  }

  async run(id: string, task: string, input: Record<string, unknown>): Promise<SkillResponse> {
    const skill = this.skills.get(id);
    if (!skill) {
      throw new Error(`Unknown skill '${id}'.`);
    }
    return skill.run({ task, input });
  }
}

