import type { Skill } from "./types.js";

export const demoSkills: Skill[] = [
  {
    id: "web-research-stub",
    description: "Returns a structured placeholder research pack from provided topics.",
    run: ({ task, input }) => ({
      summary: `Prepared research stub for '${task}'.`,
      output: {
        topics: input.topics ?? [],
        caveat: "This stub expects a real provider-backed research adapter in future versions."
      }
    })
  },
  {
    id: "file-summarizer",
    description: "Summarizes file metadata and a short excerpt.",
    run: ({ input }) => {
      const text = String(input.text ?? "");
      return {
        summary: "Summarized file content.",
        output: {
          characters: text.length,
          preview: text.slice(0, 120)
        }
      };
    }
  },
  {
    id: "markdown-report-generator",
    description: "Builds a markdown report skeleton.",
    run: ({ task, input }) => ({
      summary: `Generated markdown report for '${task}'.`,
      output: {
        markdown: `# ${task}\n\n## Summary\n${String(input.summary ?? "Pending summary")}\n`
      }
    })
  },
  {
    id: "task-classifier",
    description: "Assigns a coarse task category.",
    run: ({ task }) => ({
      summary: `Classified '${task}'.`,
      output: {
        category: task.toLowerCase().includes("support") ? "support" : "operations"
      }
    })
  },
  {
    id: "structured-output-formatter",
    description: "Wraps arbitrary input into a consistent envelope.",
    run: ({ task, input }) => ({
      summary: `Formatted structured output for '${task}'.`,
      output: {
        task,
        status: "ok",
        payload: input
      }
    })
  }
];

