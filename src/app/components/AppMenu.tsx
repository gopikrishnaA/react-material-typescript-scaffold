import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DefaultIcon from '@mui/icons-material/FileCopy';
import {
  Collapse,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import clsx from 'clsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// app routes
// interfaces
import RouteItem from '../model/RouteItem.model';
// components
import MenuItem from './MenuItem';
import { ReactElement } from 'react';

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    nested: {
      marginLeft: theme.spacing(2)
    },
    selected: {
      transition: 'box-shadow',
      transitionDuration: '1s',
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`
    },
    bottomMenu: {
      position: 'absolute',
      bottom: 0,
      width: '100%'
    }
  })
);

interface MenuProps {
  headerMenu?: Array<RouteItem>;
  footerMenu?: Array<RouteItem>;
}

interface ExpandableMenuProps {
  menu: RouteItem;
}

const ExpandableMenu = ({ menu }: ExpandableMenuProps): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location: any = useLocation();

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <IconButton
            className={clsx({
              [classes.selected]:
                !open &&
                menu?.subRoutes?.some(
                  (item: RouteItem) => item.path === location.pathname
                )
            })}
            size="small"
          >
            <Icon component={menu.icon || DefaultIcon} />
          </IconButton>
        </ListItemIcon>
        <ListItemText primary={menu.title} />
        <Tooltip title={`${open ? 'Collapse' : 'Expand'}`} placement="bottom">
          {open ? <ExpandLess /> : <ExpandMore />}
        </Tooltip>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.nested}>
          {menu?.subRoutes?.map((sRoute: RouteItem) => (
            <MenuItem key={`${sRoute.key}`} route={sRoute} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const BottomMenu = ({ footerMenu }: MenuProps): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Divider className={classes.divider} />
      {footerMenu?.map((_route: RouteItem) => (
        <MenuItem key={_route.key} route={_route} />
      ))}
    </>
  );
};
// functional component
const Menu = ({ headerMenu, footerMenu }: MenuProps): ReactElement => {
  const classes = useStyles();

  const getComponent = (route: RouteItem): ReactElement => {
    if (route.subRoutes) {
      return <ExpandableMenu key={route.key} menu={route} />;
    } else {
      return <MenuItem key={route.key} route={route} />;
    }
  };

  return (
    <>
      <List>
        {headerMenu?.map((route: RouteItem) => (
          <>
            {getComponent(route)}
            {route.appendDivider && <Divider className={classes.divider} />}
          </>
        ))}
      </List>
      <List className={classes.bottomMenu}>
        {footerMenu && <BottomMenu footerMenu={footerMenu} />}
      </List>
    </>
  );
};

export default Menu;
