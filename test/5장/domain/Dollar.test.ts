import {Franc} from "../../../src/5장/domain/Franc";

test('multiplication Test', () => {
    const franc = new Franc(5);
    expect(franc.times(2)).toEqual(new Franc(10));
});