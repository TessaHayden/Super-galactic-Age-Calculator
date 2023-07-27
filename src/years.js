export default class Years {
    constructor(mercury, venus, mars, jupiter, earth) {
        this.mercury = mercury;
        this.venus = venus;
        this.mars = mars;
        this.jupiter = jupiter;
        this.earth = earth
    }

    mercuryYear(eYear) {
        return (eYear * 365) / 87.6;
    }
    venusYear(eYear) {
        return (eYear * 365) / 226.3;
    }
}