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
    test('it should calculate a Venus year compared to an Earth year.', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        let eYear = 3;
        expect(years.venusYear(eYear)).toEqual(4.83);
    })
})