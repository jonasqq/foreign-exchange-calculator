import { RateAction, FetchRateResponse } from './types';

export function addRateCard(currency: string): RateAction {
  return { type: 'ADD_RATE_CARD', currency };
}

export function deleteRateCard(cardIndex: number): RateAction {
  return { type: 'DELETE_RATE_CARD', cardIndex };
}

export function fetchRate(selectedCurrency: string, value: number): RateAction {
  return { type: 'FETCH_RATE', selectedCurrency, value };
}

export function fetchRateDone(data: FetchRateResponse): RateAction {
  return { type: 'FETCH_RATE_DONE', data };
}
