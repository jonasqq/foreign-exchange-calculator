import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import Page, { PageHeader, PageBody } from './components/Page';
import { Input, InputGroup } from './components/Field';
import CardContainer, { CurrencyCard } from './components/Card';
import GlobalStyle from './components/GlobalStyle';

import { currencySelectOptions } from './helpers/currency';

import { fetchRate, addCurrencyRate, deleteCurrencyRate } from './redux/actions';

function AppContainer(): JSX.Element {
  return (
    <Page>
      <GlobalStyle />
      <PageHeader>Foreign Exchange Rate</PageHeader>
      <PageBody>
        <InputGroup style={{ marginBottom: 20, textAlign: 'center' }}>
          <Select
            className="react-select"
            styles={{
              control: (style): React.CSSProperties => ({ ...style, height: 40, width: 100 }),
            }}
            defaultValue={currencySelectOptions[0]}
            classNamePrefix="select"
            isSearchable={true}
            name="currency"
            options={currencySelectOptions}
          />
          <Input type="number" name="currency-value" />
        </InputGroup>
        <CardContainer>
          <CurrencyCard inputCurrency="USD" outputCurrency="IDR" rate={14000} value={100000} />
        </CardContainer>
      </PageBody>
    </Page>
  );
}

const mapStateToProps = (state: { rates: object[] }): object => ({
  rates: state.rates,
});
const mapDispatchToProps = {
  fetchRate,
  addCurrencyRate,
  deleteCurrencyRate,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
