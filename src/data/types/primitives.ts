import { z } from 'zod'

export const DataTypes = {
  // Temporal Types
  TIME: {
    DATETIME: {
      type: 'datetime',
      format: 'ISO8601',
      examples: ['2024-02-20T15:30:00Z'],
      validations: ['future_date', 'business_hours', 'timezone_aware']
    },
    DURATION: {
      type: 'duration',
      units: ['seconds', 'minutes', 'hours', 'days'],
      examples: ['P1DT2H', '24H', '86400S']
    }
  },

  // Geospatial Types
  LOCATION: {
    COORDINATES: {
      type: 'point',
      format: 'lat_long',
      examples: [{ lat: 40.7128, long: -74.0060 }],
      validations: ['valid_range', 'precision']
    },
    IP_ADDRESS: {
      type: 'ip',
      formats: ['IPv4', 'IPv6'],
      examples: ['192.168.1.1', '2001:0db8:85a3:0000:0000:8a2e:0370:7334']
    }
  },

  // Business Metrics
  FINANCIAL: {
    MONETARY: {
      type: 'decimal',
      precision: 2,
      currencies: ['USD', 'EUR', 'GBP'],
      examples: [1234.56, -789.12]
    },
    PERCENTAGE: {
      type: 'float',
      range: [0, 100],
      examples: [15.5, 87.2]
    },
    RATIOS: {
      type: 'fraction',
      examples: ['3:1', '1.5:1']
    }
  },

  // Performance Indicators
  KPI: {
    ABSOLUTE: {
      type: 'integer',
      examples: ['total_users: 1000000', 'active_sessions: 50000']
    },
    RELATIVE: {
      type: 'percentage',
      examples: ['growth_rate: 15.5%', 'churn_rate: 2.3%']
    },
    UNIT_ECONOMICS: {
      type: 'composite',
      components: {
        cac: 'cost_per_acquisition',
        ltv: 'lifetime_value',
        margin: 'gross_margin_percent'
      },
      examples: [
        { cac: 50.00, ltv: 250.00, margin: 75.5 }
      ]
    }
  },

  // Financial Statements
  PNL: {
    REVENUE: {
      type: 'monetary',
      categories: ['recurring', 'one_time', 'service'],
      aggregation: 'sum'
    },
    COSTS: {
      type: 'monetary',
      categories: ['fixed', 'variable', 'overhead'],
      aggregation: 'sum'
    },
    MARGINS: {
      type: 'percentage',
      calculations: ['gross', 'operating', 'net'],
      format: 'decimal'
    }
  },

  // MAD-Ops Specific (Machine Learning, AI, & Data Operations)
  MAD_OPS: {
    MODEL_METRICS: {
      type: 'composite',
      metrics: {
        accuracy: 'percentage',
        latency: 'milliseconds',
        throughput: 'requests_per_second'
      }
    },
    DATA_QUALITY: {
      type: 'composite',
      metrics: {
        completeness: 'percentage',
        accuracy: 'percentage',
        timeliness: 'duration'
      }
    },
    INFRASTRUCTURE: {
      type: 'composite',
      metrics: {
        cpu_usage: 'percentage',
        memory_usage: 'bytes',
        storage_usage: 'bytes'
      }
    }
  }
}

// Example Usage and Validation
export const DataTypeExamples = {
  validateFinancialMetric: (value: number, type: 'monetary' | 'percentage') => {
    const validators = {
      monetary: (v: number) => v.toFixed(2),
      percentage: (v: number) => Math.max(0, Math.min(100, v))
    }
    return validators[type](value)
  },

  formatKPI: (value: number, type: 'absolute' | 'relative') => {
    const formatters = {
      absolute: (v: number) => v.toLocaleString(),
      relative: (v: number) => `${v.toFixed(1)}%`
    }
    return formatters[type](value)
  }
}
