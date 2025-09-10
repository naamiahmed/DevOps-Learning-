'use client';

import { useAuth } from '@/lib/auth-context';
import { motion } from 'framer-motion';

export function ProfileInfo() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-red-900/30 backdrop-blur-md border border-red-500/20 rounded-lg p-6 text-white">
        Could not load user profile information.
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-8 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {user.email[0].toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{user.email.split('@')[0]}</h2>
            <p className="text-gray-300">{user.email}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard label="User ID" value={user._id} />
          <InfoCard label="Username" value={user.email.split('@')[0]} />
          <InfoCard label="Email" value={user.email} />
          <InfoCard 
            label="Account Created" 
            value={new Date(user.createdAt).toLocaleString()} 
          />
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-white/5 p-4">
        <p className="text-sm text-gray-400">Your account information is displayed above. This is a protected page that requires authentication.</p>
      </div>
    </motion.div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-lg p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-white font-mono break-all">{value}</p>
    </div>
  );
}
