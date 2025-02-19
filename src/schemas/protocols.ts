import { z } from 'zod'
import { LabelValueSchema, MetadataSchema } from './base'

export const ProtocolSchema = z.object({
  name: z.string(),
  description: z.string(),
  primaryArchetype: z.string(),
  secondaryArchetype: z.string().optional(),
  blueprintType: z.string(),
  actorType: z.string(),
  actionType: z.string(),
  steps: z.array(z.object({
    stepNumber: z.number(),
    stepActionType: z.string(),
    stepActorType: z.string().optional(),
    metadata: MetadataSchema.optional()
  })).optional(),
  metrics: z.array(z.object({
    type: z.string(),
    value: z.number(),
    threshold: z.number().optional(),
    metadata: MetadataSchema.optional()
  })).optional(),
  metadata: MetadataSchema.optional()
})
