export interface Rate {
  currency: string;
  rate: number;
}

export interface AddRateCard {
  type: 'ADD_RATE_CARD';
  currency: string;
}

export interface DeleteRateCard {
  type: 'DELETE_RATE_CARD';
  cardIndex: number;
}

export interface FetchRate {
  type: 'FETCH_RATE';
  selectedCurrency: string;
  value: number;
}

export interface FetchRateResponse {
  rates: {
    [index: string]: number;
  };
  base: string;
  date: string;
  error?: string;
}
export interface FetchRateDone {
  type: 'FETCH_RATE_DONE';
  data: FetchRateResponse;
}

export type RateAction = AddRateCard | DeleteRateCard | FetchRate | FetchRateDone;

export interface RootState {
  rates: Rate[];
}
