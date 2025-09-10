import { SignInFormData, SignUpFormData } from './validation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserProfile {
  _id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export const authService = {
  async signUp(data: SignUpFormData): Promise<ApiResponse<AuthResponse>> {
    try {
      const { confirmPassword, ...signUpData } = data;
      // Add username field from email since our backend requires it
      const payload = {
        ...signUpData,
        username: data.email.split('@')[0], // Use part of email as username
      };

      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (!response.ok) {
        return { error: result.message || 'Failed to sign up' };
      }
      
      // Store token in localStorage
      if (result.token) {
        localStorage.setItem('token', result.token);
      }
      
      return { data: result };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: 'An unexpected error occurred' };
    }
  },

  async signIn(data: SignInFormData): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        return { error: result.message || 'Failed to sign in' };
      }
      
      // Store token in localStorage
      if (result.token) {
        localStorage.setItem('token', result.token);
      }
      
      return { data: result };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: 'An unexpected error occurred' };
    }
  },

  async getProfile(): Promise<ApiResponse<UserProfile>> {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        return { error: 'Not authenticated' };
      }
      
      const response = await fetch(`${API_URL}/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          return { error: 'Session expired' };
        }
        return { error: result.message || 'Failed to get profile' };
      }
      
      return { data: result };
    } catch (error) {
      console.error('Get profile error:', error);
      return { error: 'An unexpected error occurred' };
    }
  },

  logout() {
    localStorage.removeItem('token');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};
