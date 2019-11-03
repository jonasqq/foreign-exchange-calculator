import * as React from 'react';
import styled from 'styled-components';
import { getCurrencyLabel, formatCurrency } from '../helpers/currency';
import Button from './Button';

const Card = styled.div`
  background-color: rgb(38, 132, 255);
  background-image: linear-gradient(135deg, rgb(38, 132, 255) 0%, rgb(7, 71, 166) 100%);
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  padding-right: 50;
  position: relative;
`;
const CurrencyValue = styled.div`
  font-size: 1.5em;
  margin-bottom: 5px;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.4);
  display: table;
  table-layout: fixed;
  width: 100%;
  & > span {
    display: table-cell;
    &.currency {
      width: 50px;
    }
    &.value {
      text-align: right;
      word-break: break-all;
    }
  }
`;
const CurrencyLabel = styled.div`
  font-size: 0.8em;
  margin-bottom: 5px;
  color: #eee;
`;
const CurrencyRate = styled.div`
  font-size: 1em;
  color: #eee;
`;
const CurrencyDelete = styled(Button)`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 40px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: #333;
`;

interface CurrencyCard {
  value: number;
  rate: number;
  baseCurrency: string;
  currency: string;
  onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export function CurrencyCard({ value, rate, baseCurrency, currency, onDelete }: CurrencyCard): JSX.Element {
  return (
    <Card>
      <CurrencyValue>
        <span className="currency">{currency}</span>
        <span className="value">{formatCurrency(value)}</span>
      </CurrencyValue>
      <CurrencyLabel>{getCurrencyLabel(currency)}</CurrencyLabel>
      <CurrencyRate>
        1 {baseCurrency} = {currency} {formatCurrency(rate)}
      </CurrencyRate>
      <CurrencyDelete onClick={onDelete}>(-)</CurrencyDelete>
    </Card>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -10px;
`;

export default CardContainer;
