export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
}

export interface ProfileContextType {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  isLoading: boolean;
  error: string | null;
}