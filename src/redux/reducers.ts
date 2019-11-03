import { Rate, RateAction } from './types';
import { currencyList } from '../helpers/currency';

const defaultRates: Rate[] = currencyList.slice(0, 5).map(currency => ({ currency, rate: 0 }));

export function rates(state: Rate[] = defaultRates, action: RateAction): Rate[] {
  switch (action.type) {
    case 'ADD_RATE_CARD':
      return [...state, { currency: action.currency, rate: 0 }];
    case 'DELETE_RATE_CARD':
      return state.slice(0, action.cardIndex).concat(state.slice(action.cardIndex + 1));
    case 'FETCH_RATE_DONE':
      if (action.data.error) {
        alert(action.data.error);
        return state;
      }
      return state.map(rate => ({
        currency: rate.currency,
        rate: action.data.rates[rate.currency],
      }));
    default:
      return state;
  }
}
