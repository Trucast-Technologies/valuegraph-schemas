import { z } from 'zod'
import { TaxonomyId } from './identifiers'

export const ProtocolManifest = z.object({
  identifier: TaxonomyId,
  name: z.string(),
  version: z.string(),
  timestamp: z.string().datetime(),
  blueprintType: z.enum(['compliance-regulation', 'product-development']),
  actorType: z.enum(['data-scientist', 'ml-engineer']),
  actionType: z.enum(['develop-ai-models', 'conduct-risk-analysis']),
  taxonomyRefs: z.array(z.string()), // References to other taxonomy IDs
  metadata: z.record(z.unknown()).optional()
})

// Example static manifest
export const PROTOCOL_MANIFESTS = {
  workflows: {
    "compliance": {
      identifier: {
        id: "PR-COMP01-0001",
        type: "PROTOCOL",
        segment: "COMP01",
        sequence: 1
      },
      name: "Compliance Protocol",
      version: "1.0.0"
    }
  }
}
