import Years from './../src/years';

describe('Years', () => {
    beforeEach(() => { const years = new Years() });

    test('it should create a class called years', () => {
        beforeEach();
        expect(years).toEqual(mercury, venus, mars, jupiter, earth);
    });
})