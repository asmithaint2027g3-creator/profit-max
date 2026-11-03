import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService, UserProfile, RegisterPayload } from '../services/authService';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (identifier: string, password: string) => Promise<UserProfile>;
  register: (payload: RegisterPayload) => Promise<UserProfile>;
  logout: () => void;
  resetPassword: (identifier: string, newPassword: string) => Promise<boolean>;
  logCalculator: (calculatorName: string, activityType?: 'View' | 'Calculate' | 'Export') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const activeUser = authService.getCurrentUser();
      setUser(activeUser);
    } catch (e) {
      console.warn('Auth initialization error:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (identifier: string, password: string): Promise<UserProfile> => {
    const loggedInUser = await authService.login(identifier, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const register = async (payload: RegisterPayload): Promise<UserProfile> => {
    const newUser = await authService.register(payload);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const resetPassword = async (identifier: string, newPassword: string): Promise<boolean> => {
    return authService.resetPassword(identifier, newPassword);
  };

  const logCalculator = (calculatorName: string, activityType: 'View' | 'Calculate' | 'Export' = 'View') => {
    authService.logCalculatorActivity(calculatorName, activityType);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        resetPassword,
        logCalculator
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
