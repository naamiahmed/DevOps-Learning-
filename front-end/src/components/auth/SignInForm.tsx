'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, SignInFormData } from '@/lib/validation';
import { FloatingLabelInput } from './FloatingLabelInput';

interface SignInFormProps {
  onSubmit: (data: SignInFormData) => void;
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-400">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FloatingLabelInput
          label="Email Address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />

        <FloatingLabelInput
          label="Password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="w-full py-3 px-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-lg
                     hover:from-gray-100 hover:to-white transition-all duration-300 disabled:opacity-50 
                     disabled:cursor-not-allowed shadow-lg"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mx-auto"
            />
          ) : (
            'Sign In'
          )}
        </motion.button>

        <div className="text-center">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            Forgot your password?
          </a>
        </div>
      </form>
    </motion.div>
  );
}
