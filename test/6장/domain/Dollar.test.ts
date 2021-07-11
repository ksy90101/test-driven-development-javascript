import {Dollar} from "../../../src/6장/domain/Dollar";

test('multiplication Test', () => {
    const dollar = new Dollar(5);
    expect(dollar.times(2)).toEqual(new Dollar(10));
});

test('equal method Test', () => {
    const dollar1 = new Dollar(5);
    const dollar2 = new Dollar(5);

    expect(dollar1.equals(dollar2)).toBeTruthy()
});