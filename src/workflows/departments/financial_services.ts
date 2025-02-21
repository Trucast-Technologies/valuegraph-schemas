import { z } from 'zod'
import { DataTypes } from '../../data/types/primitives'
import { FinancialServicesUseCases } from '../../use_cases/financial_services/broker_dealer'

export const DepartmentWorkflows = {
  WEALTH_MANAGEMENT: {
    department_type: "front_office",
    primary_functions: ["client_advisory", "portfolio_management", "investment_planning"],
    workflows: {
      CLIENT_MANAGEMENT: {
        inputs: DataTypes.FINANCIAL.MONETARY,
        processes: [
          "client_onboarding",
          "portfolio_review",
          "investment_strategy",
          "performance_reporting"
        ],
        outputs: DataTypes.KPI.UNIT_ECONOMICS,
        metrics: {
          client_satisfaction: "rating",
          portfolio_performance: "percentage",
          revenue_growth: "percentage"
        }
      },
      INVESTMENT_OPERATIONS: {
        inputs: [DataTypes.TIME.DATETIME, DataTypes.FINANCIAL.RATIOS],
        processes: [
          "market_analysis",
          "portfolio_rebalancing",
          "trade_execution",
          "reconciliation"
        ],
        outputs: DataTypes.PNL.MARGINS
      }
    }
  },

  COMPLIANCE: {
    department_type: "control",
    primary_functions: ["regulatory_oversight", "policy_enforcement", "risk_monitoring"],
    workflows: {
      SURVEILLANCE: {
        inputs: [DataTypes.TIME.DATETIME, DataTypes.LOCATION.IP_ADDRESS],
        processes: [
          "transaction_monitoring",
          "communication_review",
          "pattern_detection",
          "alert_management"
        ],
        outputs: DataTypes.MAD_OPS.DATA_QUALITY
      },
      REPORTING: {
        inputs: DataTypes.KPI.ABSOLUTE,
        processes: [
          "data_collection",
          "report_generation",
          "review_process",
          "submission"
        ],
        outputs: DataTypes.MAD_OPS.MODEL_METRICS
      }
    }
  },

  RISK: {
    department_type: "control",
    primary_functions: ["risk_assessment", "mitigation_planning", "monitoring"],
    workflows: {
      RISK_MONITORING: {
        inputs: [DataTypes.FINANCIAL.MONETARY, DataTypes.FINANCIAL.RATIOS],
        processes: [
          "exposure_calculation",
          "limit_monitoring",
          "stress_testing",
          "reporting"
        ],
        outputs: DataTypes.MAD_OPS.MODEL_METRICS
      }
    }
  },

  HR: {
    department_type: "support",
    primary_functions: ["talent_management", "workforce_planning", "employee_relations"],
    workflows: {
      TALENT_ACQUISITION: {
        inputs: DataTypes.TIME.DATETIME,
        processes: [
          "requirement_gathering",
          "candidate_screening",
          "interview_process",
          "onboarding"
        ],
        outputs: DataTypes.KPI.RELATIVE
      },
      PERFORMANCE_MANAGEMENT: {
        inputs: DataTypes.KPI.ABSOLUTE,
        processes: [
          "goal_setting",
          "review_process",
          "feedback_collection",
          "development_planning"
        ],
        outputs: DataTypes.KPI.UNIT_ECONOMICS
      }
    }
  }
}

// Map Departments to Use Cases
export const DepartmentUseCaseMapping = {
  WEALTH_MANAGEMENT: {
    use_cases: ["BROKER_DEALER.WEALTH_ADVISOR"],
    shared_metrics: ["client_satisfaction", "revenue_growth"],
    data_flows: {
      inputs: "client_data",
      outputs: "performance_metrics"
    }
  },
  COMPLIANCE: {
    use_cases: ["BROKER_DEALER.COMPLIANCE_OFFICER"],
    shared_metrics: ["violation_detection_rate", "response_time"],
    data_flows: {
      inputs: "transaction_data",
      outputs: "compliance_reports"
    }
  },
  RISK: {
    use_cases: ["RISK_MANAGEMENT"],
    shared_metrics: ["risk_exposure", "incident_rate"],
    data_flows: {
      inputs: "market_data",
      outputs: "risk_assessments"
    }
  },
  HR: {
    use_cases: ["HCM_OPERATIONS"],
    shared_metrics: ["time_to_hire", "employee_satisfaction"],
    data_flows: {
      inputs: "employee_data",
      outputs: "workforce_metrics"
    }
  }
}

// Workflow Orchestration
export const WorkflowOrchestration = {
  generateDepartmentWorkflow: (department: string, context: string) => {
    const baseWorkflow = DepartmentWorkflows[department]?.workflows
    const useCase = DepartmentUseCaseMapping[department]?.use_cases[0]
    return {
      context: context,
      workflow: baseWorkflow,
      use_case: useCase,
      metrics: DepartmentUseCaseMapping[department]?.shared_metrics
    }
  }
}
