import { ADD_CURRENCY, DELETE_CURRENCY, FETCH_RATE, ActionTypes } from './types';

export function addCurrencyRate(currency: string): ActionTypes {
  return { type: ADD_CURRENCY, currency };
}

export function deleteCurrencyRate(currencyId: number): ActionTypes {
  return { type: DELETE_CURRENCY, currencyId };
}

export function fetchRate(selectedCurrency: string, value: number): ActionTypes {
  return { type: FETCH_RATE, selectedCurrency, value };
}
