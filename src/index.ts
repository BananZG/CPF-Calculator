import type { TableData } from './classes/table-data.class';
import type { Profile } from './classes/profile.class';

import { Calculator } from './classes/calculator.class';

export const calculate = (
  profile: Profile,
): TableData[] => {
  const calculator = new Calculator(profile);
  const result: TableData[] = [];
  do {
    result.push(calculator.data);
  } while (calculator.addYear(1));
  return result;
};
