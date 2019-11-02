import { ADD_CURRENCY, DELETE_CURRENCY, ActionTypes } from './types';

export function rates(state: object[] = [], action: ActionTypes): object[] {
  switch (action.type) {
    case ADD_CURRENCY:
      return [...state, { currency: action.currency, rate: 0, value: 0 }];
    case DELETE_CURRENCY:
      return [...state];
    default:
      return state;
  }
}
