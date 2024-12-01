import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Pencil, Trash2 } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';
import { deleteProfile } from '../utils/api';
import { storage } from '../utils/storage';

export default function ProfileDisplay() {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    if (!profile) {
      const storedProfile = storage.getProfile();
      if (storedProfile) {
        setProfile(storedProfile);
      }
    }
  }, [profile, setProfile]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        await deleteProfile();
        storage.removeProfile();
        setProfile(null);
        toast.success('Profile deleted successfully');
        navigate('/profile-form');
      } catch (error) {
        toast.error('Failed to delete profile');
      }
    }
  };

  if (!profile) {
    return (
      <div className="text-center">
        <p className="text-gray-600 mb-4">No profile found.</p>
        <button
          onClick={() => navigate('/profile-form')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Profile
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Profile Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {profile.firstName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {profile.lastName}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {profile.email}
            </dd>
          </div>
          {profile.age && (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {profile.age}
              </dd>
            </div>
          )}
        </dl>
      </div>
      <div className="px-4 py-4 sm:px-6 flex justify-end space-x-3">
        <button
          onClick={() => navigate('/profile-form')}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}