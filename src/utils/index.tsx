const formatCurrency = (currency: string, amount: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  });

  return formatter.format(amount);
};

export { formatCurrency };
