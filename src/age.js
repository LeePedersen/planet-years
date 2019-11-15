export class Age {
  constructor(initialAge) {
    this.earthAge = initialAge;
  }
  mercury() {
    let mercAge = parseFloat(this.earthAge) / .24;
    this.mercuryAge = mercAge.toFixed(2);
  }
}
