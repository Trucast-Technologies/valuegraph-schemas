import { z } from 'zod'
import { DataTypes } from '../data/types/primitives'

export const FeatureManifest = {
  // Input Patterns (Data Ingestion)
  INPUTS: {
    DOCUMENT_BASED: {
      type: 'ingestion',
      patterns: {
        STRUCTURED: {
          formats: ['CSV', 'JSON', 'XML', 'XLSX'],
          validation: 'schema_based',
          examples: ['financial_reports', 'compliance_documents']
        },
        UNSTRUCTURED: {
          formats: ['PDF', 'TXT', 'DOC', 'EMAIL'],
          validation: 'content_based',
          examples: ['policy_documents', 'customer_communications']
        }
      },
      stakeholders: ['data_engineer', 'business_analyst', 'domain_expert']
    },

    API_BASED: {
      type: 'integration',
      patterns: {
        REST: {
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          formats: ['JSON', 'XML'],
          auth: ['API_KEY', 'OAuth2', 'JWT']
        },
        STREAMING: {
          protocols: ['Kafka', 'WebSocket', 'gRPC'],
          patterns: ['pub/sub', 'event_driven']
        }
      },
      stakeholders: ['integration_engineer', 'api_architect']
    }
  },

  // Transformation Patterns (Processing Logic)
  TRANSFORMATIONS: {
    DATA_QUALITY: {
      operations: {
        VALIDATION: ['schema_check', 'business_rules', 'regulatory_compliance'],
        ENRICHMENT: ['reference_data', 'derived_metrics', 'contextual_metadata'],
        STANDARDIZATION: ['format_normalization', 'unit_conversion', 'code_mapping']
      },
      stakeholders: ['data_steward', 'quality_analyst']
    },

    BUSINESS_LOGIC: {
      patterns: {
        CALCULATION: {
          types: ['metrics', 'scores', 'indicators'],
          examples: ['risk_score', 'performance_index', 'compliance_rating']
        },
        WORKFLOW: {
          types: ['sequential', 'parallel', 'conditional'],
          examples: ['approval_process', 'risk_assessment', 'compliance_check']
        }
      },
      stakeholders: ['business_analyst', 'domain_expert', 'process_owner']
    },

    ML_OPERATIONS: {
      patterns: {
        FEATURE_ENGINEERING: ['scaling', 'encoding', 'aggregation'],
        MODEL_PIPELINE: ['training', 'validation', 'deployment'],
        MONITORING: ['drift_detection', 'performance_tracking', 'alerts']
      },
      stakeholders: ['data_scientist', 'ml_engineer']
    }
  },

  // Output Patterns (Results & Delivery)
  OUTPUTS: {
    ANALYTICS: {
      types: {
        REPORTS: {
          formats: ['PDF', 'XLSX', 'Dashboard'],
          delivery: ['scheduled', 'on_demand', 'event_triggered']
        },
        METRICS: {
          types: ['KPI', 'SLA', 'Compliance'],
          visualization: ['charts', 'scorecards', 'alerts']
        }
      },
      stakeholders: ['business_user', 'analyst', 'executive']
    },

    OPERATIONAL: {
      types: {
        ACTIONS: {
          triggers: ['threshold_breach', 'schedule', 'event'],
          examples: ['notification', 'workflow_start', 'system_update']
        },
        FEEDBACK: {
          loops: ['monitoring', 'improvement', 'learning'],
          metrics: ['effectiveness', 'efficiency', 'satisfaction']
        }
      },
      stakeholders: ['process_owner', 'operations_team']
    },

    COMPLIANCE: {
      types: {
        AUDIT_TRAIL: {
          content: ['actions', 'decisions', 'changes'],
          format: 'immutable_log'
        },
        REGULATORY_REPORTS: {
          types: ['periodic', 'incident', 'assessment'],
          requirements: ['completeness', 'accuracy', 'timeliness']
        }
      },
      stakeholders: ['compliance_officer', 'auditor', 'regulator']
    }
  },

  // Cross-Cutting Concerns
  GOVERNANCE: {
    DATA_FABRIC: {
      patterns: {
        DISCOVERY: ['catalog', 'lineage', 'impact_analysis'],
        SECURITY: ['access_control', 'encryption', 'masking'],
        QUALITY: ['profiling', 'monitoring', 'remediation']
      }
    },
    FPS_PATTERNS: {
      stakeholder_view: {
        ROLE_BASED: ['permissions', 'responsibilities', 'accountabilities'],
        DOMAIN_BASED: ['expertise', 'authority', 'delegation'],
        PROCESS_BASED: ['activities', 'decisions', 'outcomes']
      }
    }
  }
}
