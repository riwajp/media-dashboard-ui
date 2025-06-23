import { create } from "zustand";

type User = {
  username: string;
  email: string;
  // add more fields as needed
};

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setLoading: (loading) => set({ loading }),

  resetAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      loading: false,
    }),
}));
