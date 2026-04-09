import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  country: string;
  school: string;
  year: number;
  bio?: string | null;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));
