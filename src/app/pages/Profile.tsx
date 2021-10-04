import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles, createStyles } from '@mui/styles';

// components
import PageTitle from '../components/PageTitle';

// constants
import { APP_TITLE, PAGE_TITLE_PROFILE } from '../utils/constants';

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

const Profile: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_PROFILE} />
      </div>
    </>
  );
};

export default Profile;
