'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { authService, UserProfile } from '@/lib/api';
import { AuthState } from '@/lib/types';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, confirmPassword: string) => Promise<boolean>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,
  signIn: async () => false,
  signUp: async () => false,
  signOut: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated on mount
    const initAuth = async () => {
      // If we're on the server or no token exists, return early
      if (typeof window === 'undefined' || !authService.isAuthenticated()) {
        setAuthState({ user: null, isLoading: false, error: null });
        return;
      }

      try {
        const result = await authService.getProfile();
        
        if (result.error) {
          setAuthState({ 
            user: null, 
            isLoading: false, 
            error: result.error 
          });
          return;
        }

        setAuthState({ 
          user: result.data as UserProfile, 
          isLoading: false, 
          error: null 
        });
      } catch (err) {
        setAuthState({ 
          user: null, 
          isLoading: false, 
          error: 'Failed to fetch user profile' 
        });
      }
    };

    initAuth();
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signIn({ email, password });
      
      if (result.error) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: result.error || 'Failed to sign in' 
        }));
        return false;
      }

      // Fetch user profile after successful sign in
      const profileResult = await authService.getProfile();
      
      if (profileResult.error) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: profileResult.error || 'Failed to get profile' 
        }));
        return false;
      }

      setAuthState({ 
        user: profileResult.data as UserProfile, 
        isLoading: false, 
        error: null 
      });
      return true;
    } catch (err) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: 'An unexpected error occurred' 
      }));
      return false;
    }
  };

  const signUp = async (
    email: string, 
    password: string, 
    confirmPassword: string
  ): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await authService.signUp({ 
        email, 
        password, 
        confirmPassword 
      });
      
      if (result.error) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: result.error || 'Failed to sign up' 
        }));
        return false;
      }

      // Fetch user profile after successful sign up
      const profileResult = await authService.getProfile();
      
      if (profileResult.error) {
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: profileResult.error || 'Failed to get profile' 
        }));
        return false;
      }

      setAuthState({ 
        user: profileResult.data as UserProfile, 
        isLoading: false, 
        error: null 
      });
      return true;
    } catch (err) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: 'An unexpected error occurred' 
      }));
      return false;
    }
  };

  const signOut = () => {
    authService.logout();
    setAuthState({ 
      user: null, 
      isLoading: false, 
      error: null 
    });
    router.push('/auth');
  };

  return (
    <AuthContext.Provider 
      value={{
        ...authState,
        signIn,
        signUp,
        signOut,
        isAuthenticated: !!authState.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
