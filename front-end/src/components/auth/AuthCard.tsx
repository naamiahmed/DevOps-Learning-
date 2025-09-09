'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { SignInFormData, SignUpFormData } from '@/lib/validation';
import { useAuth } from '@/lib/auth-context';

export function AuthCard() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { signIn, signUp } = useAuth();

  const handleSignIn = async (data: SignInFormData) => {
    setError(null);
    const success = await signIn(data.email, data.password);
    
    if (success) {
      router.push('/');
    }
  };

  const handleSignUp = async (data: SignUpFormData) => {
    setError(null);
    const success = await signUp(data.email, data.password, data.confirmPassword);
    
    if (success) {
      router.push('/');
    }
  };

  const cardVariants = {
    initial: { 
      rotateY: 0,
      scale: 1,
    },
    hover: { 
      rotateY: 2,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        className="relative w-full max-w-md perspective-1000"
      >
        {/* Background Card */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Toggle Buttons */}
          <div className="flex mb-8 p-1 bg-white/5 rounded-lg backdrop-blur-sm">
            <motion.button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                isSignIn 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
            <motion.button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                !isSignIn 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Form Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSignIn ? (
                <SignInForm key="signin" onSubmit={handleSignIn} />
              ) : (
                <SignUpForm key="signup" onSubmit={handleSignUp} />
              )}
            </AnimatePresence>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse" 
                 style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-0 w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl -z-10" />
      </motion.div>
    </div>
  );
}
