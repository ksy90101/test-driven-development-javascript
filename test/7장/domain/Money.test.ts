import {Dollar} from "../../../src/7장/domain/Dollar";
import {Franc} from "../../../src/7장/domain/Franc";

test('equal method Test', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy()
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy()
    expect(new Franc(5).equals(new Dollar(5))).toBeTruthy()
});
