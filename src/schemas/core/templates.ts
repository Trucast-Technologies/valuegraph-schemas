import { z } from 'zod'

export const CoreTemplates = {
  // FPS (First Person Stakeholder) Base Templates
  ACTOR: z.object({
    id: z.string(),
    type: z.string(),
    role: z.string(),
    capabilities: z.array(z.string()),
    attributes: z.record(z.number()),
    traits: z.array(z.string()),
    relationships: z.array(z.string())
  }),

  ACTION: z.object({
    id: z.string(),
    type: z.string(),
    requirements: z.array(z.string()),
    effects: z.array(z.string()),
    metrics: z.array(z.string()),
    constraints: z.array(z.string())
  }),

  BLUEPRINT: z.object({
    id: z.string(),
    type: z.string(),
    domain: z.string(),
    actors: z.array(z.string()),
    actions: z.array(z.string()),
    workflows: z.array(z.object({
      steps: z.array(z.string()),
      validation: z.array(z.string())
    }))
  }),

  METRIC: z.object({
    id: z.string(),
    type: z.string(),
    unit: z.string(),
    range: z.object({
      min: z.number(),
      max: z.number()
    }),
    thresholds: z.array(z.object({
      level: z.string(),
      value: z.number()
    }))
  })
}
