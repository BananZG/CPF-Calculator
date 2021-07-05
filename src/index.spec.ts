import { Profile } from './classes/profile.class';
import { calculate } from '.';

describe('calculator', () => {
  it('calculate', () => {
    const profile = new Profile(25, 3000, 500, 1);
    const data = calculate(profile);
    expect(data).toHaveLength(101 - profile.age);

    const lastYear = data[data.length - 1];
    expect(lastYear.employeeRate).toEqual('5.0%');
    expect(lastYear.employerRate).toEqual('7.5%');
  });
});
