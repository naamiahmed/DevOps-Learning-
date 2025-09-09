import { Navbar } from '@/components/Navbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <p className="text-white">Welcome to your dashboard!</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
