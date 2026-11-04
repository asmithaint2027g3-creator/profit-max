import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService, UserProfile, RegisterPayload } from '../services/authService';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (identifier: string, password: string) => Promise<UserProfile>;
  register: (payload: RegisterPayload) => Promise<UserProfile>;
  initiateRegistration: (data: RegisterPayload & { honeypot?: string; timeElapsedMs?: number }) => Promise<any>;
  verifyEmailCode: (params: { verificationToken: string; code: string; email: string; registrationData: RegisterPayload }) => Promise<UserProfile>;
  resendVerificationCode: (verificationToken: string, email: string) => Promise<string>;
  checkDuplicate: (userId: string, email: string, mobile?: string) => Promise<{ exists: boolean; field: 'userId' | 'email' | 'mobile' | null; message?: string }>;
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

  const initiateRegistration = async (data: RegisterPayload & { honeypot?: string; timeElapsedMs?: number }): Promise<any> => {
    return authService.initiateRegistration(data);
  };

  const verifyEmailCode = async (params: { verificationToken: string; code: string; email: string; registrationData: RegisterPayload }): Promise<UserProfile> => {
    const newUser = await authService.verifyEmailCode(params);
    setUser(newUser);
    return newUser;
  };

  const resendVerificationCode = async (verificationToken: string, email: string): Promise<string> => {
    return authService.resendVerificationCode(verificationToken, email);
  };

  const checkDuplicate = async (userId: string, email: string, mobile?: string) => {
    return authService.checkDuplicate(userId, email, mobile);
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
        initiateRegistration,
        verifyEmailCode,
        resendVerificationCode,
        checkDuplicate,
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
