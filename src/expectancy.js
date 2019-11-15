export class Expectancy {
  constructor(age, mentalHealth, income, gender) {
    this.age = age;
    this.mentalHealth = mentalHealth;
    this.income = parseInt(income);
    this.gender = gender;
  }

  expectCalc() {
    let earthExpect = 75;
    if (this.mentalHealth === "severe") {
      earthExpect -= 23;
    } else if (this.mentalHealth === "moderate") {
      earthExpect -= 5;
    }
    if (this.income < 10000) {
      earthExpect -= 10;
    }
    if (this.gender === "cismale") {
      earthExpect -= 5;
    } else if (this.gender === "transmale") {
      earthExpect -= 10;
    } else if (this.gender === "transwoman") {
      earthExpect -= 15;
    } else if (this.gender === "nonbinary" || this.gender === "other"){
      earthExpect -= 10;
    }
    earthExpect = earthExpect - parseInt(this.age);
    return earthExpect;
  }
}
