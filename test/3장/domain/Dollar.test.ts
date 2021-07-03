import {Dollar} from "../../../src/3장/domain/Dollar";

test('equals Test', () => {
    const dollar1 = new Dollar(5);
    const dollar2 = new Dollar(5);

    expect(dollar1).toEqual(dollar2);
});

test('equal method Test', () => {
    const dollar1 = new Dollar(5);
    const dollar2 = new Dollar(5);

    expect(dollar1.equals(dollar2)).toBeTruthy()
});
