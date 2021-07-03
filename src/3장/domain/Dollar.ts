export class Dollar {

    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier: number) {
        const multiplyDollar = this.amount * multiplier;
        return new Dollar(multiplyDollar);
    }

    public equals(object: Dollar) {
        return this.amount === object.amount;
    }
}