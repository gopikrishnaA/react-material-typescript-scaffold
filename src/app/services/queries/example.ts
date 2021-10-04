import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "INR") {
      currency
      rate
    }
  }
`;
