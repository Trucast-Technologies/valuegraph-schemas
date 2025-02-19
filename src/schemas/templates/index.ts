import { z } from 'zod'
import { TaxonomyId } from '../identifiers'
import { PROTOCOL_SCHEMA } from '../config/protocolTypes'

// Extract valid categories from schema
const validCategories = [
  'document-pipeline',
  'data-pipeline',
  'operational-benchmarks',
  'sales-growth',
  'efficiency-optimization'
] as const

// Create enums from schema values
const actorValues = PROTOCOL_SCHEMA.ACTORS.TYPES.map(t => t.value)
const blueprintValues = PROTOCOL_SCHEMA.BLUEPRINTS.TYPES.map(t => t.value)
const actionValues = PROTOCOL_SCHEMA.ACTIONS.TYPES.map(t => t.value)
const metricValues = PROTOCOL_SCHEMA.METRICS.TYPES.map(t => t.value)

export const TemplateSchema = z.object({
  id: TaxonomyId,
  name: z.string(),
  category: z.enum(validCategories),
  domain: z.string(),
  defaultActors: z.array(z.enum(actorValues as [string, ...string[]])),
  defaultBlueprints: z.array(z.enum(blueprintValues as [string, ...string[]])),
  defaultActions: z.array(z.enum(actionValues as [string, ...string[]])),
  metrics: z.array(z.enum(metricValues as [string, ...string[]])),
  steps: z.array(z.object({
    order: z.number(),
    action: z.enum(actionValues as [string, ...string[]]),
    actor: z.enum(actorValues as [string, ...string[]]).optional(),
    requiredData: z.array(z.enum(PROTOCOL_SCHEMA.DATA.TYPES.map(t => t.value) as [string, ...string[]])).optional(),
    metrics: z.array(z.enum(metricValues as [string, ...string[]])).optional()
  }))
})
