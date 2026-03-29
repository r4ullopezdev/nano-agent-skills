export type SkillRequest = {
  task: string;
  input: Record<string, unknown>;
};

export type SkillResponse = {
  summary: string;
  output: Record<string, unknown>;
};

export type Skill = {
  id: string;
  description: string;
  run(request: SkillRequest): Promise<SkillResponse> | SkillResponse;
};

