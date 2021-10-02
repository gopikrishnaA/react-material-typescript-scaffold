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

// components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import GHPrivate from '../pages/GitHub/PrivateRepo';
import GHPublic from '../pages/GitHub/PublicRepo';
import CodeEditor from '../pages/CodeEditor';
import Settings from '../pages/Settings';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
  {
    key: 'router-home',
    title: 'Home',
    tooltip: 'Home',
    path: '/',
    enabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true
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
    icon: CodeIcon,
    appendDivider: true
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/settings',
    enabled: true,
    component: Settings,
    icon: SettingsIcon
  }
];

export const settings: Array<RouteItem> = [
  {
    key: 'router-profile',
    title: 'Profile',
    tooltip: 'Profile',
    path: '/',
    enabled: true,
    component: Home,
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
    path: '/logout',
    enabled: true,
    component: Settings,
    icon: LogoutIcon
  }
];
