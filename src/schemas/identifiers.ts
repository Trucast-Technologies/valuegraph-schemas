import { z } from 'zod'

// OpenFIGI-style identifier structure
export const TaxonomyId = z.object({
  id: z.string().regex(/^[A-Z]{2}-[A-Z0-9]{6}-[A-Z0-9]{4}$/), // e.g., "PR-COMP01-0001"
  type: z.enum([
    'PROTOCOL',    // PR prefix
    'BLUEPRINT',   // BP prefix
    'ARCHETYPE',   // AR prefix
    'WORKFLOW',    // WF prefix
    'POLICY'       // PL prefix
  ]),
  segment: z.string(), // Business segment code
  sequence: z.number() // Sequential identifier
})
