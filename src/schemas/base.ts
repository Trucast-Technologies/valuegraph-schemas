import { z } from 'zod'

export const LabelValueSchema = z.object({
  label: z.string(),
  value: z.string()
})

export const MetadataSchema = z.record(z.unknown())
