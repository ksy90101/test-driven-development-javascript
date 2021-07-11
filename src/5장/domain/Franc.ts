export class Franc {

    private readonly amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier: number) {
        const multiplyFranc = this.amount * multiplier;
        return new Franc(multiplyFranc);
    }

    public equals(object: Franc) {
        return this.amount === object.amount;
    }
}