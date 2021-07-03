import {Dollar} from "../../../src/2장/domain/Dollar";

test('곱셈 테스트', () => {
    const dollar = new Dollar(5);

    let multiplyDollar = dollar.times(2);

    expect(multiplyDollar.amount).toBe(10);

    multiplyDollar = dollar.times(3);

    expect(multiplyDollar.amount).toBe(15);
});