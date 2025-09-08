export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface FormState {
  isSubmitting: boolean;
  error: string | null;
}
