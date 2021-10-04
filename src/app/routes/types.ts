import { ReactNode } from 'react';

export interface routeProps {
  children: ReactNode;
  isAuthenticated: Boolean;
  path: string;
}
