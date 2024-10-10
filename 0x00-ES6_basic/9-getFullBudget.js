import getBudgetObject from './7-getBudgetObject';

const getFullBudgetObject = (income, gdp, capita) => {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (incomeValue) => `$${incomeValue}`,
    getIncomeInEuros: (incomeValue) => `${incomeValue} euros`,
  };

  return fullBudget;
};

export default getFullBudgetObject;
