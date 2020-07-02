export interface Investment {
    id: string,
    user: string,
    name: string,
    expectedReturns: number,
    maturityDate: Date,
    currentAmount: number
}