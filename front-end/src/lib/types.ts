export interface User {
  _id: string;
  email: string;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
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
