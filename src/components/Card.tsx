import * as React from 'react';
import styled from 'styled-components';
import { getCurrencyLabel, formatCurrency } from '../helpers/currency';

const Card = styled.div`
  background: #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;
const CurrencyValue = styled.div`
  font-size: 1.5em;
  margin-bottom: 5px;
  & .value {
    float: right;
  }
`;
const CurrencyLabel = styled.div`
  font-size: 0.8em;
  margin-bottom: 5px;
`;
const CurrencyRate = styled.div`
  font-size: 1em;
`;

interface CurrencyCard {
  value: number;
  rate: number;
  inputCurrency: string;
  outputCurrency: string;
}
export function CurrencyCard({ value, rate, inputCurrency, outputCurrency }: CurrencyCard): JSX.Element {
  return (
    <Card>
      <CurrencyValue>
        <span className="currency">{outputCurrency}</span>
        <span className="value">{formatCurrency(value)}</span>
      </CurrencyValue>
      <CurrencyLabel>{getCurrencyLabel(outputCurrency)}</CurrencyLabel>
      <CurrencyRate>
        1 {inputCurrency} = {outputCurrency} {formatCurrency(rate)}
      </CurrencyRate>
    </Card>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
`;

export default CardContainer;
