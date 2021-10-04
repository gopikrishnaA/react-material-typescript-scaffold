import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles, createStyles } from '@mui/styles';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../services/queries/example';
// components
import PageTitle from '../components/PageTitle';

// constants
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

interface exchangeRates {
  currency: string;
  rate: string;
}

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
);

function ExchangeRates(): ReactElement {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { taskId: 'id' }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }: exchangeRates) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const Home: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_HOME} />
      </div>
      <ExchangeRates />
    </>
  );
};

export default Home;
