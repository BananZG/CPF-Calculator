export type CPFRate = {
  salary: number;
  employerRate: number;
  employeeRate: number;
  owCap: number;
  twFrom?: number;
}

export type CPFRateConfig = {
  age: number;
  rates: CPFRate[];
}
