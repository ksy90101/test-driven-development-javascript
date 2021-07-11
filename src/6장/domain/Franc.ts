import {Money} from "./Money";

export class Franc extends Money{

    constructor(amount: number) {
        super(amount);
    }

    public times(multiplier: number) {
        const multiplyFranc = this.amount * multiplier;
        return new Money(multiplyFranc);
    }
}