import Years from './../src/years';

describe('Years', () => {
    test('it should create a class called years', () => {
        const years = new Years("mercury", "venus", "mars", "jupiter", "earth");
        expect(years).toEqual({"mercury":"mercury", "venus": "venus", "mars": "mars", "jupiter": "jupiter", "earth": "earth"});
    });
})