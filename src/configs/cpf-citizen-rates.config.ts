import type { CPFRateConfig } from '../models/cpf-rates.model';

export const CitizenRateConfig: CPFRateConfig[] = [
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
        employerRate: 0.17,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.17,
        employeeRate: 0.6,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.17,
        employeeRate: 0.2,
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
        employerRate: 0.13,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.13,
        employeeRate: 0.39,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.13,
        employeeRate: 0.13,
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
        employerRate: 0.09,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.09,
        employeeRate: 0.225,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.09,
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
        employerRate: 0.075,
        employeeRate: 0,
        owCap: 500,
      },
      {
        salary: 749,
        employerRate: 0.075,
        employeeRate: 0.15,
        twFrom: 500,
        owCap: 749,
      },
      {
        salary: Number.MAX_VALUE,
        employerRate: 0.075,
        employeeRate: 0.05,
        owCap: 6000,
      },
    ],
  },
];
