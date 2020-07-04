export interface Investment {
    id: string,
    user: string,
    name: string,
    expectedReturns: number,
    maturityDate: Date,
    maturityAmount: number,
    balanceAmount: number,
    balanceAsOnDate: Date,
    recurringMonthlyInvestment: number
}