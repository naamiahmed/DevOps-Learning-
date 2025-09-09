import { Navbar } from '@/components/Navbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProfileInfo } from '@/components/ProfileInfo';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Your Profile</h1>
          <ProfileInfo />
        </div>
      </div>
    </ProtectedRoute>
  );
}
