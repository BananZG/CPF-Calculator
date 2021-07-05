import type { CPFRateConfig } from '../models/cpf-rates.model';

export const PRYear2RateConfig: CPFRateConfig[] = [
  {
    age: 55,
    rates: [
      {
        salary: 50,
        employerRate: 0,
        employeeRate: 0,
        owCap: 0,
      },
      {
        salary: 500,
        employerRate: 0.09,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.09,
        employeeRate: 0.45,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.09,
        employeeRate: 0.15,
        owCap: 6000,
      },
    ],
  },
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
        employerRate: 0.06,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.06,
        employeeRate: 0.375,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.06,
        employeeRate: 0.125,
        owCap: 6000,
      },
    ],
  },
  {
    age: 65,
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
        employeeRate: 0.225,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.035,
        employeeRate: 0.075,
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
