/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState, useRef } from "react";
import { AuthService } from "../services";
import { User } from "../types";
import { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const hasCheckedAuth = useRef(false);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const checkAuth = async () => {
    try {
      const response = await AuthService.checkAuth();
      if (response) {
        setUser(response);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasCheckedAuth.current) {
      checkAuth();
      hasCheckedAuth.current = true;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        checkAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
