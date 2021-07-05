import type { CPFRateConfig } from '../models/cpf-rates.model';

export const PRYear1RateConfig: CPFRateConfig[] = [
  {
    age: 60,
    rates: [
      {
        salary: 50,
        employerRate: 0,
        employeeRate: 0,
        owCap: 0,
      },
      {
        salary: 500,
        employerRate: 0.04,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.04,
        employeeRate: 0.15,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.04,
        employeeRate: 0.05,
        owCap: 6000,
      },
    ],
  },
  {
    age: Number.MAX_VALUE,
    rates: [
      {
        salary: 50,
        employerRate: 0,
        employeeRate: 0,
        owCap: 0,
      },
      {
        salary: 500,
        employerRate: 0.035,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.035,
        employeeRate: 0.15,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.035,
        employeeRate: 0.05,
        owCap: 6000,
      },
    ],
  },
];
