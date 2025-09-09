'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpFormData } from '@/lib/validation';
import { FloatingLabelInput } from './FloatingLabelInput';

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => Promise<void>;
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-gray-400">Join us today</p>
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

        <FloatingLabelInput
          label="Confirm Password"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
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
            'Create Account'
          )}
        </motion.button>

        <div className="text-center text-sm text-gray-400">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-white hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-white hover:underline">
            Privacy Policy
          </a>
        </div>
      </form>
    </motion.div>
  );
}
