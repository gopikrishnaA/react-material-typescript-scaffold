import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react';

interface applicationProps {
  children: ReactNode;
}

interface AppContextInterface {
  isAuthenticated: Boolean;
  setAuthenticated: Function;
}

export const ApplicationContext = createContext<AppContextInterface | null>({
  isAuthenticated: false,
  setAuthenticated: () => {}
});

export const ApplicationProvider = ({
  children
}: applicationProps): ReactElement => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <ApplicationContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = (): any => useContext(ApplicationContext);
