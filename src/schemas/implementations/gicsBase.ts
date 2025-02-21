import { z } from 'zod'

export const GICSBase = {
  ENERGY: {
    sector_id: 10,
    groups: {
      EQUIPMENT_AND_SERVICES: {
        name: "Energy Equipment & Services",
        workflows: ["asset_management", "maintenance", "safety_compliance"]
      },
      OIL_GAS_CONSUMABLE_FUELS: {
        name: "Oil, Gas & Consumable Fuels",
        workflows: ["resource_tracking", "distribution", "environmental_compliance"]
      }
    }
  },

  MATERIALS: {
    sector_id: 15,
    groups: {
      CHEMICALS: {
        name: "Chemicals",
        workflows: ["quality_control", "safety_protocols", "regulatory_compliance"]
      },
      CONSTRUCTION_MATERIALS: {
        name: "Construction Materials",
        workflows: ["inventory_management", "quality_assurance"]
      },
      CONTAINERS_PACKAGING: {
        name: "Containers & Packaging",
        workflows: ["production_tracking", "supply_chain"]
      },
      METALS_MINING: {
        name: "Metals & Mining",
        workflows: ["extraction_monitoring", "safety_management"]
      },
      PAPER_FOREST: {
        name: "Paper & Forest Products",
        workflows: ["sustainability_tracking", "production_management"]
      }
    }
  },

  INDUSTRIALS: {
    sector_id: 20,
    groups: {
      AEROSPACE_DEFENSE: {
        name: "Aerospace & Defense",
        workflows: ["project_management", "compliance_tracking"]
      },
      BUILDING_PRODUCTS: {
        name: "Building Products",
        workflows: ["inventory_control", "quality_management"]
      },
      CONSTRUCTION_ENGINEERING: {
        name: "Construction & Engineering",
        workflows: ["project_tracking", "resource_management"]
      },
      ELECTRICAL_EQUIPMENT: {
        name: "Electrical Equipment",
        workflows: ["production_monitoring", "quality_control"]
      },
      INDUSTRIAL_CONGLOMERATES: {
        name: "Industrial Conglomerates",
        workflows: ["portfolio_management", "performance_tracking"]
      },
      MACHINERY: {
        name: "Machinery",
        workflows: ["maintenance_scheduling", "performance_monitoring"]
      },
      TRADING_DISTRIBUTORS: {
        name: "Trading Companies & Distributors",
        workflows: ["inventory_tracking", "logistics_management"]
      },
      COMMERCIAL_SERVICES: {
        name: "Commercial Services & Supplies",
        workflows: ["service_delivery", "customer_management"]
      },
      PROFESSIONAL_SERVICES: {
        name: "Professional Services",
        workflows: ["project_tracking", "resource_allocation"]
      },
      TRANSPORTATION: {
        name: "Transportation",
        workflows: ["fleet_management", "route_optimization"]
      }
    }
  }
}

// Continue with other sectors...
export const GICSImplementationBase = {
  // Cross-sector implementation patterns
  COMMON_PATTERNS: {
    DOCUMENT_MANAGEMENT: {
      type: "universal",
      applicable_sectors: "all",
      base_workflows: [
        "document_intake",
        "classification",
        "processing",
        "storage",
        "retrieval"
      ]
    },
    COMPLIANCE_TRACKING: {
      type: "universal",
      applicable_sectors: "all",
      base_workflows: [
        "requirement_tracking",
        "audit_management",
        "report_generation",
        "issue_resolution"
      ]
    },
    PERFORMANCE_MONITORING: {
      type: "universal",
      applicable_sectors: "all",
      base_workflows: [
        "metric_collection",
        "analysis",
        "reporting",
        "improvement_tracking"
      ]
    }
  }
}
