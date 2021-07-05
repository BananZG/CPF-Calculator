export class Profile {
  age: number;

  ow: number;

  aw: number;

  prYear: number;

  constructor(age = 0, ow = 0, aw = 0, prYear = 3) {
    this.age = age;
    this.ow = ow;
    this.aw = aw;
    this.prYear = prYear;
  }
}
