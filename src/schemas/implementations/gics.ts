import { z } from 'zod'
import { CoreTemplates } from '../core/templates'
import { DataTypes } from '../../data/types/primitives'

export const GICSImplementations = {
  // Financial Services (40)
  BANKING: {
    sector: 'Financials',
    industry: 'Banks',
    blueprints: {
      RETAIL_BANKING: {
        actors: ['relationship_manager', 'risk_officer', 'compliance_analyst'],
        actions: ['kyc_verification', 'loan_processing', 'account_management'],
        workflows: {
          ACCOUNT_OPENING: {
            steps: [
              'identity_verification',
              'document_collection',
              'risk_assessment',
              'compliance_check',
              'account_creation'
            ],
            data_types: {
              inputs: [DataTypes.TIME.DATETIME, DataTypes.LOCATION.COORDINATES],
              metrics: [DataTypes.KPI.UNIT_ECONOMICS, DataTypes.FINANCIAL.MONETARY]
            }
          },
          LOAN_ORIGINATION: {
            steps: [
              'application_intake',
              'credit_assessment',
              'risk_scoring',
              'approval_workflow',
              'disbursement'
            ],
            metrics: ['approval_rate', 'processing_time', 'risk_score']
          }
        }
      },

      WEALTH_MANAGEMENT: {
        actors: ['portfolio_manager', 'investment_advisor', 'compliance_officer'],
        actions: ['portfolio_review', 'investment_planning', 'risk_assessment'],
        workflows: {
          PORTFOLIO_MANAGEMENT: {
            steps: [
              'client_profiling',
              'asset_allocation',
              'risk_analysis',
              'performance_monitoring'
            ],
            data_types: {
              inputs: [DataTypes.FINANCIAL.MONETARY, DataTypes.KPI.RELATIVE],
              metrics: [DataTypes.PNL.MARGINS, DataTypes.FINANCIAL.RATIOS]
            }
          }
        }
      }
    }
  },

  // Technology (45)
  TECHNOLOGY: {
    sector: 'Information Technology',
    industry: 'Software & Services',
    blueprints: {
      SAAS_OPERATIONS: {
        actors: ['product_manager', 'data_scientist', 'platform_engineer'],
        actions: ['feature_deployment', 'usage_analysis', 'performance_monitoring'],
        workflows: {
          FEATURE_LIFECYCLE: {
            steps: [
              'requirement_analysis',
              'development',
              'testing',
              'deployment',
              'monitoring'
            ],
            data_types: {
              inputs: [DataTypes.TIME.DURATION, DataTypes.MAD_OPS.MODEL_METRICS],
              metrics: [DataTypes.MAD_OPS.INFRASTRUCTURE, DataTypes.KPI.ABSOLUTE]
            }
          }
        }
      }
    }
  },

  // Healthcare (35)
  HEALTHCARE: {
    sector: 'Healthcare',
    industry: 'Healthcare Providers',
    blueprints: {
      CLINICAL_OPERATIONS: {
        actors: ['clinical_director', 'compliance_manager', 'quality_analyst'],
        actions: ['patient_care', 'compliance_monitoring', 'quality_assessment'],
        workflows: {
          QUALITY_MANAGEMENT: {
            steps: [
              'data_collection',
              'analysis',
              'reporting',
              'improvement_planning'
            ],
            data_types: {
              inputs: [DataTypes.TIME.DATETIME, DataTypes.KPI.ABSOLUTE],
              metrics: [DataTypes.MAD_OPS.DATA_QUALITY, DataTypes.KPI.RELATIVE]
            }
          }
        }
      }
    }
  },

  // Shared Patterns
  COMMON_PATTERNS: {
    DOCUMENT_MANAGEMENT: {
      type: 'cross_sector',
      workflows: {
        DOCUMENT_PROCESSING: {
          steps: [
            'intake',
            'classification',
            'extraction',
            'validation',
            'storage'
          ],
          data_types: {
            inputs: [DataTypes.TIME.DATETIME],
            metrics: [DataTypes.MAD_OPS.DATA_QUALITY]
          }
        }
      }
    },
    
    COMPLIANCE_MONITORING: {
      type: 'regulatory',
      workflows: {
        AUDIT_TRAIL: {
          steps: [
            'event_logging',
            'verification',
            'reporting',
            'archival'
          ],
          data_types: {
            inputs: [DataTypes.TIME.DATETIME, DataTypes.LOCATION.IP_ADDRESS],
            metrics: [DataTypes.KPI.ABSOLUTE, DataTypes.MAD_OPS.DATA_QUALITY]
          }
        }
      }
    }
  }
}
