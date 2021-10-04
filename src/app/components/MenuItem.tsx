import React, { ReactElement } from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Tooltip,
  IconButton
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import DefaultIcon from '@mui/icons-material/FileCopy';
import { NavLink, useLocation } from 'react-router-dom';
import { useApplication } from '../AppProvider';

// models
import RouteItem from '../model/RouteItem.model';

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      transition: 'box-shadow',
      transitionDuration: '1s',
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`
    },
    nested: {
      marginLeft: theme.spacing(2)
    },
    listItemDisabled: {
      cursor: 'not-allowed'
    }
  })
);

interface MenuItemProps {
  route: RouteItem;
}

// functional component
const MenuItem = ({ route }: MenuItemProps): ReactElement => {
  const classes = useStyles();
  const location = useLocation();

  const { setAuthenticated } = useApplication();
  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (!route.enabled) e.preventDefault();
    if (route.key === 'router-logout') setAuthenticated(false);
  };

  return (
    <NavLink
      to={`${route.path}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      key={route.key}
      onClick={handleNavigate}
      className={clsx({
        [classes.listItemDisabled]: !route.enabled
      })}
    >
      <Tooltip title={route.tooltip || ''} placement="right">
        <ListItem button disabled={!route.enabled}>
          <ListItemIcon>
            <IconButton
              className={clsx({
                [classes.selected]: location.pathname === route.path
              })}
              size="small"
            >
              <Icon component={route.icon || DefaultIcon} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItem>
      </Tooltip>
    </NavLink>
  );
};

export default MenuItem;
