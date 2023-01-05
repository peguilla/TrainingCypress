describe('Mon premier test', () => {
  it('Vérifie que vrai est vrai', () => {
    expect(true).to.equal(true)
  });

  it("Vérifie que faux n'est pas vrai", () => {
    expect(false).not.to.equal(true)
  });

})