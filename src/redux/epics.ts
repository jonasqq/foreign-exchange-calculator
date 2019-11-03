import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType, combineEpics, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import { Rate, FetchRate, FetchRateResponse } from './types';
import { fetchRateDone } from './actions';
import { AnyAction } from 'redux';

const HOST = 'https://api.exchangeratesapi.io/latest';

const fetchRateEpic: Epic<AnyAction> = (action$, state$) =>
  action$.pipe(
    ofType('FETCH_RATE'),
    mergeMap((action: FetchRate) => {
      const queryString = new URLSearchParams();
      queryString.set('base', action.selectedCurrency);
      queryString.set('symbols', state$.value.rates.map((rate: Rate) => rate.currency).toString());
      return ajax.getJSON(`${HOST}?${queryString}`).pipe(
        map((res: FetchRateResponse) => fetchRateDone(res)),
        catchError(err => of(fetchRateDone(err.response))),
      );
    }),
  );

const epics = combineEpics(fetchRateEpic);

export default epics;
