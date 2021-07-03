export class Dollar{

    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number){
        const multiplyDollar = this.amount * multiplier;
        return new Dollar(multiplyDollar);
    }
}