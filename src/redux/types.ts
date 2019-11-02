export const ADD_CURRENCY = 'ADD_CURRENCY';
export const DELETE_CURRENCY = 'DELETE_CURRENCY';
export const FETCH_RATE = 'GET_RATE';

interface AddCurrencyAction {
  type: typeof ADD_CURRENCY;
  currency: string;
}

interface DeleteCurrencyAction {
  type: typeof DELETE_CURRENCY;
  currencyId: number;
}

interface RateAction {
  type: typeof FETCH_RATE;
  selectedCurrency: string;
  value: number;
}

export type ActionTypes = AddCurrencyAction | DeleteCurrencyAction | RateAction;
