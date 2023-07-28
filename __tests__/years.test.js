import Years from './../src/years';

describe('Years', () => {
    test('it should create a class called years', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        expect(years).toEqual({"mercury":"mercury", "venus": "venus", "mars": "mars", "jupiter": "jupiter", "earth": "earth"});
    });
    test('it should calculate a Mercury year compared to an Earth year.', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let eYear = 3;
        expect(years.mercuryYear(eYear)).toEqual(12.5);
    });
    test('it should calculate a Venus year - to 2 decimal places - compared to an Earth year.', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let eYear = 3;
        expect(years.venusYear(eYear)).toEqual("4.84");
    });
    test('it should calculate a Mars year, to 2 decimal places, compared to an Earth year.', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let eYear = 3;
        expect(years.marsYear(eYear)).toEqual("2058.60")
    });
    test('it should calculate a Jupiter year, to 2 decimal places, compared to an Earth year.', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let eYear = 3;
        expect(years.jupiterYear(eYear)).toEqual("12986.70");
    });
    test("it should determine how many years have passed on each planet since a past birthday", () => {
      const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let currentAge = 56;
        let pastAge = 43;
      expect(years.planetAges(currentAge, pastAge)).toEqual(54.16, 20.96, 6.91, 1.09);
    });
    
})