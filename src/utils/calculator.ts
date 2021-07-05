import { CitizenRateConfig } from '../configs/cpf-citizen-rates.config';
import { PRYear1RateConfig } from '../configs/cpf-pr-year1-rates.config';
import { PRYear2RateConfig } from '../configs/cpf-pr-year2-rates.config.ts';
import { CPFRate, CPFRateConfig } from '../models/cpf-rates.model';

export const getConfig = (prYear: number): CPFRateConfig[] => {
  switch (prYear) {
    case 1:
      return PRYear1RateConfig;
    case 2:
      return PRYear2RateConfig;
    default:
      return CitizenRateConfig;
  }
};

export const getRate = (
  config: CPFRateConfig[], targetAge: number, targetSalary: number,
): CPFRate => {
  const { rates } = config.find(({ age }) => targetAge <= age) ?? config[0];
  return rates.find(
    ({ salary }) => targetSalary <= salary,
  ) ?? rates[0];
};

export const getFinalRate = (
  prYear: number, targetAge: number, targetSalary: number,
): CPFRate => getRate(getConfig(prYear), targetAge, targetSalary);
