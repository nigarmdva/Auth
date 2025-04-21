import { create } from "zustand";
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  (set) => ({
    user: null,
    token: null,
    isAuth: false,

    login: (user, token) => {
      console.log("User logged in:", user, token);
      set({
        isAuth: true,
        user, 
        token,
      });
    },
    logout: () => {
      set({ isAuth: false, user: null, token: null });
    },
  }),
  // {
  //   name: 'auth-storage',
  // }
);

export default useAuthStore;
