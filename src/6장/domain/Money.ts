export class Money {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public equals(object: Money) {
        return this.amount === object.amount;
    }
}