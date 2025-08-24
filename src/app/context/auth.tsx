'use client'

import { redirect } from 'next/navigation';
import { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  jwt: string | null;
  login: (token: string, user: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loggedin: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [loggedin, setLoggedin] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    const userName = localStorage.getItem('user');
    if (storedToken) {
      setJwt(storedToken);
      setLoggedin(userName);
    }
  }, []);

  const login = (token: string, user: string) => {
    localStorage.setItem('jwt', token);
    localStorage.setItem('user', user)
    setJwt(token);
    setLoggedin(user);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user')
    setJwt(null);
    redirect('/');
  };

  const isAuthenticated = !!jwt;

  return (
    <AuthContext.Provider value={{ jwt, login, logout, isAuthenticated, loggedin }}>
      {children}
    </AuthContext.Provider>
  );
};
