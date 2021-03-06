import { ReactElement } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      textTransform: 'uppercase'
    }
  })
);

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps): ReactElement => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.title} color="textSecondary">
      {title}
    </Typography>
  );
};

export default PageTitle;
