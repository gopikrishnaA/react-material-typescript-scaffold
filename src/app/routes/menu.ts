import { lazy } from 'react';
// icons
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/BarChartOutlined';
import CodeIcon from '@mui/icons-material/CodeOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import PrivateIcon from '@mui/icons-material/LockOutlined';
import PublicIcon from '@mui/icons-material/LockOpenOutlined';
import UserIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

// interface
import RouteItem from '../model/RouteItem.model';
// components
const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const GHPrivate = lazy(() => import('../pages/GitHub/PrivateRepo'));
const GHPublic = lazy(() => import('../pages/GitHub/PublicRepo'));
const CodeEditor = lazy(() => import('../pages/CodeEditor'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const NotFound = lazy(() => import('../components/NotFound'));

// define app routes
export const headerMenu: Array<RouteItem> = [
  {
    key: 'router-home',
    title: 'Home',
    tooltip: 'Home',
    path: '/home',
    enabled: true,
    component: Home,
    icon: HomeIcon
  },
  {
    key: 'router-dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
    path: '/dashboard',
    enabled: true,
    component: Dashboard,
    icon: DashboardIcon
  },
  {
    key: 'router-gh',
    title: 'GitHub',
    tooltip: 'GitHub',
    enabled: true,
    icon: GitHubIcon,
    subRoutes: [
      {
        key: 'router-gh-private',
        title: 'Private Repos',
        tooltip: 'Private Repos',
        path: '/gh/private',
        enabled: true,
        component: GHPrivate,
        icon: PrivateIcon
      },
      {
        key: 'router-gh-public',
        title: 'Public Repos',
        tooltip: 'Public Repos',
        path: '/gh/public',
        enabled: false,
        component: GHPublic,
        icon: PublicIcon
      }
    ]
  },
  {
    key: 'router-code',
    title: 'Code Editor',
    tooltip: 'Code Editor',
    path: '/code-editor',
    enabled: true,
    component: CodeEditor,
    icon: CodeIcon
  }
];

export const footerMenu: Array<RouteItem> = [
  {
    key: 'router-logout',
    title: 'Logout',
    tooltip: 'Logout',
    path: '/login',
    enabled: true,
    component: NotFound,
    icon: LogoutIcon
  }
];

export const settingsMenu: Array<RouteItem> = [
  {
    key: 'router-profile',
    title: 'Profile',
    tooltip: 'Profile',
    path: '/profile',
    enabled: true,
    component: Profile,
    icon: UserIcon
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/settings',
    enabled: true,
    component: Settings,
    icon: SettingsIcon,
    appendDivider: true
  },
  {
    key: 'router-logout',
    title: 'Logout',
    tooltip: 'Logout',
    path: '/login',
    enabled: true,
    component: NotFound,
    icon: LogoutIcon
  }
];
