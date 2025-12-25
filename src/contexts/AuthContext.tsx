import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../services/auth';
import { User } from '../models/User';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  guestMode: boolean;
  setGuestMode: (mode: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [guestMode, setGuestMode] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user ? { id: user.uid, username: user.displayName || '', email: user.email || '' } : null));
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const signup = async (email: string, password: string, username: string) => {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user?.updateProfile({ displayName: username });
    // Give 300 Sakura Coins on signup (placeholder: store in Firestore)
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, guestMode, setGuestMode }}>
      {children}
    </AuthContext.Provider>
  );
};