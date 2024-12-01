import { Profile } from '../types/profile';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function saveProfile(profile: Profile): Promise<Profile> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 1000);
  });
}

export async function getProfile(): Promise<Profile | null> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = localStorage.getItem('profile');
      resolve(profile ? JSON.parse(profile) : null);
    }, 1000);
  });
}

export async function deleteProfile(): Promise<void> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('profile');
      resolve();
    }, 1000);
  });
}