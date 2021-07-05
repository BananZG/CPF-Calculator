import { CurrencyFormatter } from '../utils/locale';

export class TableData {
   age: number;

   salary: string;

   employeeRate: string;

   employerRate: string;

   employeeCPF: string;

   employerCPF: string;

   totalCPF: string;

   totalYearlyCPF: string;

   accumulation: string;

   constructor(
     age: number,
     salary: number,
     employeeRate: number,
     employerRate: number,
     employeeCPF: number,
     employerCPF: number,
     totalCPF: number,
     totalYearlyCPF: number,
     accumulation: number,
   ) {
     this.age = age;
     this.salary = salary.toFixed(2);
     this.employeeRate = `${(employeeRate * 100).toFixed(1)}%`;
     this.employerRate = `${(employerRate * 100).toFixed(1)}%`;
     this.employeeCPF = CurrencyFormatter.format(employeeCPF);
     this.employerCPF = CurrencyFormatter.format(employerCPF);
     this.totalCPF = CurrencyFormatter.format(totalCPF);
     this.totalYearlyCPF = CurrencyFormatter.format(totalYearlyCPF);
     this.accumulation = CurrencyFormatter.format(accumulation);
   }
}
