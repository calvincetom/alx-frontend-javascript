import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(incomeValue) {
      return `$${incomeValue}`; // Renamed to incomeValue
    },
    getIncomeInEuros(incomeValue) {
      return `${incomeValue} euros`; // Renamed to incomeValue
    },
  };

  return fullBudget;
}
