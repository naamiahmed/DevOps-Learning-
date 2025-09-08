'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef, InputHTMLAttributes } from 'react';

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    return (
      <div className="relative w-full">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            ref={ref}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`
              w-full px-4 pt-6 pb-2 bg-white/5 backdrop-blur-sm border border-gray-300/20 
              rounded-lg text-white placeholder-transparent focus:outline-none 
              focus:border-white/50 focus:bg-white/10 transition-all duration-300
              ${error ? 'border-red-400/50 focus:border-red-400' : ''}
              ${className}
            `}
          />
          <motion.label
            animate={{
              top: isFocused || hasValue ? '0.5rem' : '1rem',
              fontSize: isFocused || hasValue ? '0.75rem' : '1rem',
              color: error ? '#f87171' : isFocused ? '#ffffff' : '#9ca3af',
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 pointer-events-none transform origin-left"
          >
            {label}
          </motion.label>
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 ml-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = 'FloatingLabelInput';
