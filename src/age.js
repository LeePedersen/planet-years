export class Age {
  constructor(initialAge) {
    this.earthAge = initialAge;
  }

  mercury() {
    let mercAge = parseFloat(this.earthAge) / .24;
    this.mercuryAge = mercAge.toFixed(2);
  }

  venus() {
    let venusAge = parseFloat(this.earthAge) / .62;
    this.venusAge = venusAge.toFixed(2);
  }

  mars() {
    let marsAge = parseFloat(this.earthAge) / 1.88;
    this.marsAge = marsAge.toFixed(2);
  }

  jupiter() {
    let jupiterAge = parseFloat(this.earthAge) / 11.86;
    this.jupiterAge = jupiterAge.toFixed(2);
  }
}
