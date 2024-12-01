import { Link, Outlet } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export default function Layout() {
  const { profile } = useProfile();

  return (
    <div className="min-h-screen bg-gray-200">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <UserCircle className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold">Profile Manager</span>
              </Link>
            </div>
            <div className="flex items-center">
              {profile ? (
                <span className="text-gray-700">
                  {profile.firstName} {profile.lastName}
                </span>
              ) : (
                <Link
                  to="/profile-form"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Create Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}