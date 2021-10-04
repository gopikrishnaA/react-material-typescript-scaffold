import React, { useState, MouseEvent, ReactElement } from 'react';
import UserIcon from '@mui/icons-material/AccountCircle';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  IconButton,
  Popover,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import clsx from 'clsx';
// constants
import { APP_TITLE, DRAWER_WIDTH } from '../utils/constants';
// components
import AppMenu from './AppMenu';
import { settingsMenu } from '../routes/menu';

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      'z-index': `${theme.zIndex.drawer + 1}`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    toolbar: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    }
  })
);

// define interface to represent component props
interface HeaderProps {
  open: boolean;
  handleMenuOpen: () => void;
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

const Header = ({
  open,
  handleMenuOpen,
  toggleTheme,
  useDefaultTheme
}: HeaderProps): ReactElement => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onProfileIconClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfilePopoverClose = (): void => {
    setAnchorEl(null);
  };

  const isProfileMenuOpen = Boolean(anchorEl);
  const profilePopoverId = isProfileMenuOpen ? 'simple-popover' : undefined;
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
            size="small"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {APP_TITLE}
          </Typography>
        </div>
        <IconButton onClick={toggleTheme}>
          {useDefaultTheme ? (
            <Tooltip title="Switch to dark mode" placement="bottom">
              <Brightness3Icon />
            </Tooltip>
          ) : (
            <Tooltip title="Switch to light mode" placement="bottom">
              <Brightness7Icon />
            </Tooltip>
          )}
        </IconButton>
        <IconButton size="small" color="inherit" onClick={onProfileIconClick}>
          <UserIcon />
        </IconButton>
        <Popover
          id={profilePopoverId}
          open={isProfileMenuOpen}
          anchorEl={anchorEl}
          onClose={handleProfilePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <AppMenu headerMenu={settingsMenu} />
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
