import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as authStorage from "api/services/authStorage";
import { initApiClient } from "api/config/client";
import { AuthResponse } from "models/response/AuthResponse";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

interface AuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  authorize: (tokens: AuthResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    if (GoogleSignin.hasPreviousSignIn()) await GoogleSignin.signOut();
    await authStorage.clearAuthTokens();
    setIsAuthenticated(false);
  };

  const authorize = async (tokens: AuthResponse) => {
    await authStorage.setAccessToken(tokens.accessToken);
    await authStorage.setRefreshToken(tokens.refreshToken);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    initApiClient(async () => await logout());

    const checkAuth = async () => {
      try {
        const token = await authStorage.getAccessToken();
        setIsAuthenticated(!!token);
      } finally {
        setIsLoading(false);
      }
    };

    void checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, authorize, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
