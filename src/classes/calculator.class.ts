import type { CPFRate } from '../models/cpf-rates.model';
import type { Profile } from './profile.class';

import { VariablesConfig } from '../configs/variables.config';
import { TableData } from './table-data.class';

import { getFinalRate } from '../utils/calculator';

export class Calculator {
  age: number;

  ow: number;

  aw: number;

  prYear: number;

  rate: CPFRate;

  lastAccumulation: number;

  constructor(
    {
      age, ow, aw, prYear,
    }: Profile,
  ) {
    this.age = age;
    this.ow = ow;
    this.aw = aw;
    this.prYear = prYear;
    this.rate = getFinalRate(prYear, age, this.totalSalary);
    this.lastAccumulation = 0;
  }

  addYear(year: number): boolean {
    if (year <= 0) {
      throw new Error('year must be >= 0');
    }
    this.age += 1;
    if (this.age > 100) {
      return false;
    }
    const { yearlyIncrement } = VariablesConfig;
    this.prYear += 1;
    this.ow += this.ow * yearlyIncrement;
    this.aw += this.ow * yearlyIncrement;
    this.rate = getFinalRate(this.prYear, this.age, this.totalSalary);
    return true;
  }

  get totalSalary(): number {
    return this.ow + this.aw;
  }

  get employeeCPF(): number {
    const { ow, aw, totalSalary } = this;
    const { employeeRate, owCap, twFrom } = this.rate;
    if (twFrom) {
      return (totalSalary - twFrom) * employeeRate;
    }
    return Math.max(ow, owCap) * employeeRate + aw * employeeRate;
  }

  get employerCPF(): number {
    const { ow, aw } = this;
    const { employerRate, owCap } = this.rate;
    return Math.max(ow, owCap) * employerRate + aw * employerRate;
  }

  get data(): TableData {
    const { age, totalSalary } = this;
    const { employeeRate, employerRate } = this.rate;
    const { employeeCPF, employerCPF } = this;
    const totalCPF = employeeCPF + employerCPF;
    const totalYearlyCPF = totalCPF * 12;
    this.lastAccumulation += totalYearlyCPF;
    return new TableData(
      age,
      totalSalary,
      employeeRate,
      employerRate,
      employeeCPF,
      employerCPF,
      totalCPF,
      totalYearlyCPF,
      this.lastAccumulation,
    );
  }
}
