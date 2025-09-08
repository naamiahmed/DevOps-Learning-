'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Welcome to the Home Page
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          You have successfully navigated to the home page. Experience modern design with smooth animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link href="/auth">
            <motion.span
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-lg
                         hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg cursor-pointer"
            >
              Go to Auth Page
            </motion.span>
          </Link>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(255, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg
                       hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
