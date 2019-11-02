export function getCurrencyLabel(currency: string): string {
  const labels: { [index: string]: string } = {
    IDR: 'IDR - Indonesian Rupiah',
    USD: 'USD - United States Dollar',
  };
  return labels[currency];
}

export const currencyList = ['USD', 'CAD', 'IDR', 'GBP', 'CHF', 'SGD', 'INR', 'MYR', 'JPY', 'KRW'];
export const currencySelectOptions = currencyList.map(currency => ({ value: currency, label: currency }));

export function formatCurrency(value: number): string {
  return value.toLocaleString();
}
