import { z } from 'zod'
import { TaxonomyId } from '../identifiers'
import { PROTOCOL_SCHEMA } from '../config/protocolTypes'

// Extract valid categories from schema
const validCategories = [
  'document-pipeline',
  'data-pipeline',
  'operational-benchmarks',
  'sales-growth',
  'efficiency-optimization',
  'hr-compliance',
  'performance-management',
  'talent-development',
  'risk-assessment',
  'regulatory-compliance'
]

// Create validation arrays from schema
const actorValues = PROTOCOL_SCHEMA.ACTORS.TYPES.map(t => t.value)
const blueprintValues = PROTOCOL_SCHEMA.BLUEPRINTS.TYPES.map(t => t.value)
const actionValues = PROTOCOL_SCHEMA.ACTIONS.TYPES.map(t => t.value)
const metricValues = PROTOCOL_SCHEMA.METRICS.TYPES.map(t => t.value)
const dataValues = PROTOCOL_SCHEMA.DATA.TYPES.map(t => t.value)

export const TemplateSchema = z.object({
  id: TaxonomyId,
  name: z.string(),
  category: z.string(),
  domain: z.string(),
  defaultActors: z.array(z.string()),
  defaultBlueprints: z.array(z.string()),
  defaultActions: z.array(z.string()),
  metrics: z.array(z.string()),
  steps: z.array(z.object({
    order: z.number(),
    action: z.string(),
    actor: z.string().optional(),
    requiredData: z.array(z.string()).optional(),
    metrics: z.array(z.string()).optional()
  }))
})
