export class Expectancy {
  constructor(age, mentalHealth, income, gender) {
    this.age = age;
    this.mentalHealth = mentalHealth;
    this.income = parseInt(income);
    this.gender = gender;
  }

  expectCalc() {
    const earthExpect = 75;
    if (mentalHealth === "severe") {
      earthExpect -= 23;
    } else if (mentalHealth === "moderate") {
      earthExpect -= 5;
    }
    if (this.income < 10,000) {
      earthExpect -= 10;
    }
    if (gender === "cismale") {
      earthExpect -= 5;
    } else if (gender === "transmale") {
      earthExpect -= 10;
    } else if (gender === "transwoman") {
      earthExpect -= 15;
    } else if (gender === "nonbinary" || gender === "other"){
      earthExpect -= 10;
    }
    earthExpect = earthExpect - age;
    return earthExpect;
  }
}
