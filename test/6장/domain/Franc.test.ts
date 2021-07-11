import {Franc} from "../../../src/6장/domain/Franc";

test('multiplication Test', () => {
    const franc = new Franc(5);
    expect(franc.times(2)).toEqual(new Franc(10));
});

test('equal method Test', () => {
    const dollar1 = new Franc(5);
    const dollar2 = new Franc(5);

    expect(dollar1.equals(dollar2)).toBeTruthy()
});