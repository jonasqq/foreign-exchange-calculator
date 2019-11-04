import * as React from 'react';
import { connect, Provider } from 'react-redux';
import Select from 'react-select';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Page, { PageHeader, PageBody } from './components/Page';
import { Input, InputGroup } from './components/Field';
import CardContainer, { CurrencyCard } from './components/Card';
import Button from './components/Button';
import GlobalStyle from './components/GlobalStyle';

import { currencySelectOptions, altCurrencySelectOptions, getCurrencyLabel } from './helpers/currency';

import { fetchRate, addRateCard, deleteRateCard } from './redux/actions';
import { Rate, RateAction } from './redux/types';
import store from './redux/store';

const { useState, useEffect } = React;

interface MapState {
  rates: Rate[];
}
interface MapDispatch {
  fetchRate: (selectedCurrency: string, value: number) => RateAction;
  addRateCard: (currency: string) => RateAction;
  deleteRateCard: (cardIndex: number) => RateAction;
}

type Props = MapState & MapDispatch;

function AppPage({ rates, fetchRate, addRateCard, deleteRateCard }: Props): JSX.Element {
  const activeCurrencies = rates.map(rate => rate.currency);
  const altCurrencies = altCurrencySelectOptions.filter(option => !activeCurrencies.includes(option.value));
  const [form, changeForm] = useState({
    baseCurrency: currencySelectOptions[0],
    inputValue: 10,
    selectedNewCurrency: null,
  });
  const [showAddMoreBtn, toggleAddMoreBtn] = useState(true);
  const { baseCurrency, inputValue, selectedNewCurrency } = form;
  useEffect((): void => {
    fetchRate(baseCurrency.value, inputValue);
  }, [baseCurrency, inputValue, rates.length]);
  return (
    <Page>
      <GlobalStyle />
      <PageHeader>Foreign Exchange Rate</PageHeader>
      <PageBody style={{ marginBottom: 20 }}>
        <div style={{ fontStyle: 'italic', marginBottom: 5, fontSize: '0.8em' }}>
          {getCurrencyLabel(baseCurrency.value)}
        </div>
        <InputGroup style={{ marginBottom: 20 }}>
          <Select
            className="react-select"
            styles={{
              control: (style): React.CSSProperties => ({ ...style, height: 40, width: 100 }),
            }}
            onChange={(selected: { value: string; label: string }): void => {
              changeForm({ ...form, baseCurrency: selected });
            }}
            defaultValue={baseCurrency}
            classNamePrefix="select"
            isSearchable={true}
            name="currency"
            options={currencySelectOptions}
          />
          <Input
            style={{ width: 'calc(100% - 100px)', textAlign: 'right' }}
            type="number"
            name="currency-value"
            defaultValue={inputValue}
            onChange={(e): void => changeForm({ ...form, inputValue: parseInt(e.target.value) })}
          />
        </InputGroup>
        <CardContainer style={{ marginBottom: 10 }}>
          <TransitionGroup enter>
            {rates.map((rate: Rate, idx) => {
              return (
                rate.currency !== baseCurrency.value && (
                  <CSSTransition key={rate.currency} timeout={500} classNames="card">
                    <CurrencyCard
                      key={rate.currency}
                      baseCurrency={form.baseCurrency.value}
                      currency={rate.currency}
                      rate={rate.rate}
                      value={rate.rate * form.inputValue}
                      onDelete={(): void => {
                        deleteRateCard(idx);
                      }}
                    />
                  </CSSTransition>
                )
              );
            })}
          </TransitionGroup>
        </CardContainer>
        {showAddMoreBtn ? (
          <Button onClick={(): void => toggleAddMoreBtn(!showAddMoreBtn)}>(+) Add More Currencies</Button>
        ) : (
          <InputGroup style={{ textAlign: 'center' }}>
            <Select
              className="react-select"
              styles={{
                control: (style): React.CSSProperties => ({ ...style, height: 40, width: 100 }),
              }}
              onChange={(selected: { value: string; label: string }): void => {
                changeForm({ ...form, selectedNewCurrency: selected });
              }}
              value={selectedNewCurrency}
              classNamePrefix="select"
              isSearchable={true}
              name="add-currency-card"
              options={altCurrencies}
              placeholder="Select"
            />
            <Button
              onClick={(): void => {
                if (selectedNewCurrency) {
                  addRateCard(selectedNewCurrency.value);
                  changeForm({ ...form, selectedNewCurrency: null });
                }
              }}
            >
              Submit
            </Button>
          </InputGroup>
        )}
      </PageBody>
    </Page>
  );
}

const mapStateToProps = (state: { rates: Rate[] }): MapState => ({
  rates: state.rates,
});
const mapDispatchToProps = {
  fetchRate,
  addRateCard,
  deleteRateCard,
};
const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppPage);

export default function AppProvider(): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
