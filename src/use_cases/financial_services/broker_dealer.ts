import { z } from 'zod'
import { DataTypes } from '../../data/types/primitives'

export const FinancialServicesUseCases = {
  BROKER_DEALER: {
    WEALTH_ADVISOR: {
      role: "Wealth Management Advisor",
      context: "Leading Investment Firm",
      workflows: {
        CLIENT_ENGAGEMENT: {
          actor: {
            role: "Senior Advisor",
            capabilities: ["portfolio_management", "client_relations", "compliance"],
            tools: ["market_data_platform", "portfolio_analytics", "crm"]
          },
          actions: {
            DAILY_REVIEW: {
              steps: [
                "dashboard_analysis",
                "client_portfolio_review",
                "market_data_analysis",
                "compliance_check"
              ],
              data_types: {
                inputs: [DataTypes.FINANCIAL.MONETARY, DataTypes.TIME.DATETIME],
                outputs: [DataTypes.KPI.UNIT_ECONOMICS]
              }
            },
            CLIENT_REPORTING: {
              steps: [
                "data_aggregation",
                "analysis_generation",
                "compliance_validation",
                "report_creation"
              ],
              metrics: {
                efficiency: "time_to_deliver",
                quality: "accuracy_score",
                compliance: "regulatory_adherence"
              }
            }
          }
        }
      }
    },

    COMPLIANCE_OFFICER: {
      role: "Chief Compliance Officer",
      context: "Global Financial Institution",
      workflows: {
        REGULATORY_OVERSIGHT: {
          actor: {
            role: "Compliance Lead",
            capabilities: ["regulatory_expertise", "risk_assessment", "audit_management"],
            tools: ["compliance_platform", "monitoring_systems", "reporting_tools"]
          },
          actions: {
            TRANSACTION_MONITORING: {
              steps: [
                "data_collection",
                "pattern_analysis",
                "violation_detection",
                "report_generation"
              ],
              data_types: {
                inputs: [DataTypes.TIME.DATETIME, DataTypes.FINANCIAL.MONETARY],
                outputs: [DataTypes.MAD_OPS.DATA_QUALITY]
              }
            }
          }
        }
      }
    },

    DIGITAL_INNOVATION: {
      role: "Digital Transformation Leader",
      context: "Asset Management Firm",
      workflows: {
        SYSTEM_MODERNIZATION: {
          actor: {
            role: "Innovation Director",
            capabilities: ["digital_strategy", "system_integration", "change_management"],
            tools: ["integration_platform", "analytics_suite", "automation_tools"]
          },
          actions: {
            LEGACY_INTEGRATION: {
              steps: [
                "system_assessment",
                "integration_planning",
                "implementation",
                "validation"
              ],
              metrics: {
                implementation_time: "reduction_percentage",
                compliance_delays: "reduction_percentage",
                system_efficiency: "improvement_score"
              }
            }
          }
        }
      }
    }
  }
}
