import { createContext, useContext, useState, type PropsWithChildren } from 'react';

type AuthContextValue = {
  isAuthenticated: boolean;
  toggleAuthentication: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuthentication = () => {
    setIsAuthenticated((current) => !current);
  };

  const value = {
    isAuthenticated,
    toggleAuthentication,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return value;
}
