import { z } from 'zod'

// OpenFIGI-compatible configuration
export const TAXONOMY_CONFIG = {
  API_VERSION: '3',
  PREFIXES: {
    PROTOCOL: 'PR',
    BLUEPRINT: 'BP',
    ARCHETYPE: 'AR',
    WORKFLOW: 'WF',
    POLICY: 'PL'
  },
  SEGMENTS: {
    COMPLIANCE: 'COMP01',
    PRODUCT: 'PROD01',
    MARKETING: 'MRKT01',
    FINANCE: 'FINA01',
    HR: 'HRMS01',
    TECH: 'TECH01'
  }
}
