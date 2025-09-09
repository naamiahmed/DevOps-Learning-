'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';

export function Navbar() {
  const { user, signOut, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-white/10 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          DevOps Learning
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink href="/dashboard" isActive={isActive('/dashboard')}>Dashboard</NavLink>
          
          {isAuthenticated ? (
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-sm">{user?.email}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
                    Profile
                  </Link>
                  <button 
                    onClick={signOut} 
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <Link 
              href="/auth" 
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 mt-4 rounded-lg overflow-hidden"
        >
          <Link href="/" className="block px-4 py-2 text-white hover:bg-white/10">
            Home
          </Link>
          <Link href="/dashboard" className="block px-4 py-2 text-white hover:bg-white/10">
            Dashboard
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link href="/profile" className="block px-4 py-2 text-white hover:bg-white/10">
                Profile
              </Link>
              <button 
                onClick={signOut} 
                className="w-full text-left px-4 py-2 text-white hover:bg-white/10"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth" className="block px-4 py-2 text-white hover:bg-white/10">
              Sign In
            </Link>
          )}
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={`relative ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}>
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}
