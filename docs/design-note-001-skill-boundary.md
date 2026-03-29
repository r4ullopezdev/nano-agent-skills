# Design Note 001: Skill Boundary

Skills are treated as portable capabilities with small, explicit contracts.

The registry stays intentionally lightweight so it can plug into different runtimes without dragging orchestration policy, memory, or provider logic into the skill layer.

