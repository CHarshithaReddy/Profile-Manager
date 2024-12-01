import { Profile } from '../types/profile';

export const storage = {
  getProfile: (): Profile | null => {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(profile) : null;
  },

  setProfile: (profile: Profile): void => {
    localStorage.setItem('profile', JSON.stringify(profile));
  },

  removeProfile: (): void => {
    localStorage.removeItem('profile');
  }
};