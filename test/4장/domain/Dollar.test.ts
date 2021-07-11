import {Dollar} from "../../../src/4장/domain/Dollar";

test('multiplication Test', () => {
    const dollar1 = new Dollar(5);
    expect(dollar1.times(2)).toEqual(new Dollar(10));
});