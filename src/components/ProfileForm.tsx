import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useProfile } from '../context/ProfileContext';
import { saveProfile } from '../utils/api';
import { storage } from '../utils/storage';
import { Profile } from '../types/profile';

export default function ProfileForm() {
  const navigate = useNavigate();
  const { profile: existingProfile, setProfile } = useProfile();
  const [formData, setFormData] = useState<Profile>(
    existingProfile || {
      firstName: '',
      lastName: '',
      email: '',
      age: undefined,
    }
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const savedProfile = await saveProfile(formData);
        storage.setProfile(savedProfile);
        setProfile(savedProfile);
        toast.success('Profile saved successfully!');
        navigate('/profile');
      } catch (error) {
        toast.error('Failed to save profile');
      }
    },
    [formData, navigate, setProfile]
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        {existingProfile ? 'Edit Profile' : 'Create Profile'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            required
            minLength={3}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            required
            minLength={3}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Age (optional)
          </label>
          <input
            type="number"
            value={formData.age || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value ? parseInt(e.target.value) : undefined,
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {existingProfile ? 'Update Profile' : 'Create Profile'}
        </button>
      </form>
    </div>
  );
}