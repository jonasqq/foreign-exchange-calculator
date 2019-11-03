export function getCurrencyLabel(currency: string): string {
  const labels: { [index: string]: string } = {
    IDR: 'IDR - Indonesian Rupiah',
    USD: 'USD - United States Dollar',
    EUR: 'EUR - Euro',
    GBP: 'GBP - British Pound',
    SGD: 'SGD - Singapore Dollar',
    CAD: 'CAD - Canada Dollar',
    CHF: 'CHF - Swiss Franc',
    INR: 'INR - Indian Rupee',
    MYR: 'MYR - Malaysian Ringgit',
    JPY: 'JPY - Japanese Yen',
    KRW: 'KRW - Korean Won',
  };
  return labels[currency] || '-';
}

export const currencyList = ['USD', 'IDR', 'EUR', 'GBP', 'SGD', 'CAD', 'CHF', 'INR', 'MYR', 'JPY', 'KRW'];
const excludedCurrency = ['EUR'];
export const currencySelectOptions = currencyList
  .filter(currency => !excludedCurrency.includes(currency))
  .map(currency => ({ value: currency, label: currency }));
export const altCurrencySelectOptions = currencyList.map(currency => ({ value: currency, label: currency }));

export function formatCurrency(value: number): string {
  return value.toLocaleString();
}
