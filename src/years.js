export default class Years {
    constructor(mercury, venus, mars, jupiter, earth) {
        this.mercury = mercury;
        this.venus = venus;
        this.mars = mars;
        this.jupiter = jupiter;
        this.earth = earth
    }

    mercuryYear(eYear) {
        return ((eYear * 365) / 87.6).toFixed(2);
    }
    venusYear(eYear) {
        return ((eYear * 365) / 226.3).toFixed(2);
    }
    marsYear(eYear) {
        return ((eYear * 365) * 1.88).toFixed(2);
    }
    jupiterYear(eYear) {
        return ((eYear * 365) * 11.86).toFixed(2);
    }
    planetAges(currentAge, pastAge) {
        let ageDiff = currentAge - pastAge;
        let ageArray = [];
        let mercuryAge = this.mercuryYear(ageDiff);
        let venusAge = this.venusYear(ageDiff);
        let marsAge = (ageDiff / 1.88).toFixed(2);
        let jupiterAge = (ageDiff / 11.86).toFixed(2);
        ageArray.push(mercuryAge);
        ageArray.push(venusAge);
        ageArray.push(marsAge);
        ageArray.push(jupiterAge);
        return ageArray;
    }
}