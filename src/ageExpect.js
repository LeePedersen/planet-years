export class AgeExpect {
  constructor(age, mentalHealth, income, gender) {
    this.earthage = age;
    this.age = age;
    this.mentalHealth = mentalHealth;
    this.income = parseInt(income);
    this.gender = gender;
  }

  mercury() {
    let mercAge = parseFloat(this.age) / .24;
    this.mercuryAge = mercAge.toFixed(2);
    let mercuryExpect = parseFloat(this.earthExpect / .24);
    this.mercuryExpect = mercuryExpect.toFixed(2);
  }

  venus() {
    let venusAge = parseFloat(this.age) / .62;
    this.venusAge = venusAge.toFixed(2);
    let venusExpect = parseFloat(this.earthExpect / .62);
    this.venusExpect = venusExpect.toFixed(2);
  }

  mars() {
    let marsAge = parseFloat(this.age) / 1.88;
    this.marsAge = marsAge.toFixed(2);
    let marsExpect = parseFloat(this.earthExpect / 1.88);
    this.marsExpect = marsExpect.toFixed(2);
  }

  jupiter() {
    let jupiterAge = parseFloat(this.age) / 11.86;
    this.jupiterAge = jupiterAge.toFixed(2);
    let jupiterExpect = parseFloat(this.earthExpect / 11.86);
    this.jupiterExpect = jupiterExpect.toFixed(2);
  }

  expectCalc() {
    let expect = 75;
    if (this.mentalHealth === "severe") {
      expect -= 23;
    } else if (this.mentalHealth === "moderate") {
      expect -= 5;
    }
    if (this.income < 10000) {
      expect -= 10;
    }
    if (this.gender === "cismale") {
      expect -= 5;
    } else if (this.gender === "transmale") {
      expect -= 10;
    } else if (this.gender === "transwoman") {
      expect -= 15;
    } else if (this.gender === "nonbinary" || this.gender === "other"){
      expect -= 10;
    }
    expect = expect - parseInt(this.age);
    this.earthExpect = expect;
  }
}
