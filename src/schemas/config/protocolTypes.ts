import { z } from 'zod'

export const PROTOCOL_SCHEMA = {
  DATA: {
    TYPES: [
      { label: 'Document', value: 'document', category: 'input' },
      { label: 'Spreadsheet', value: 'spreadsheet', category: 'input' },
      { label: 'Database', value: 'database', category: 'storage' },
      { label: 'API', value: 'api', category: 'interface' },
      { label: 'Model', value: 'model', category: 'processing' },
      { label: 'Report', value: 'report', category: 'output' },
      { label: 'Dashboard', value: 'dashboard', category: 'visualization' },
      { label: 'Metrics', value: 'metrics', category: 'measurement' }
    ],
    CATEGORIES: [
      { label: 'Primitive', value: 'primitive', domain: 'core' },
      { label: 'Composite', value: 'composite', domain: 'core' },
      { label: 'Domain-Specific', value: 'domain-specific', domain: 'business' },
      { label: 'Measurement', value: 'measurement', domain: 'analytics' }
    ],
    BASE_TYPES: [
      { label: 'String', value: 'string', category: 'primitive' },
      { label: 'Number', value: 'number', category: 'primitive' },
      { label: 'Boolean', value: 'boolean', category: 'primitive' },
      { label: 'Date', value: 'date', category: 'primitive' }
    ]
  },
  ACTORS: {
    TYPES: [
      { label: 'Data Scientist', value: 'data-scientist', domain: 'technology' },
      { label: 'ML Engineer', value: 'ml-engineer', domain: 'technology' },
      { label: 'Compliance Officer', value: 'compliance-officer', domain: 'governance' },
      { label: 'Product Manager', value: 'product-manager', domain: 'product' }
    ]
  },
  BLUEPRINTS: {
    TYPES: [
      { label: 'Compliance & Regulation', value: 'compliance-regulation', domain: 'governance' },
      { label: 'Product Development', value: 'product-development', domain: 'product' }
    ]
  },
  ACTIONS: {
    TYPES: [
      { label: 'Develop AI Models', value: 'develop-ai-models', domain: 'technology' },
      { label: 'Conduct Risk Analysis', value: 'conduct-risk-analysis', domain: 'compliance' }
    ]
  },
  METRICS: {
    TYPES: [
      { label: 'System Uptime', value: 'system-uptime', domain: 'technology', schema: z.number().min(0).max(100) },
      { label: 'Model Performance', value: 'model-performance', domain: 'technology', schema: z.number() }
    ]
  }
} as const
