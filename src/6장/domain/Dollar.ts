import {Money} from "./Money";

export class Dollar extends Money {

    constructor(amount: number) {
        super(amount);
    }

    public times(multiplier: number) {
        const multiplyDollar = this.amount * multiplier;
        return new Dollar(multiplyDollar);
    }
}