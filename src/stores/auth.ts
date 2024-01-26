import type { User } from '@/types/user';
import { create } from 'zustand';

type State = {
  user: User;
  currentPath: string;
  isLogin: boolean;
};

type Action = {
  setUser: (user: User) => void;
  setCurrentPath: (currentPath: string) => void;
  setIsLogin: (value: boolean) => void;
};

const defaultState: State = {
  user: {
    displayName: '',
    email: '',
    profilePicture: '',
  },
  currentPath: '',
  isLogin: false,
};

const useAuthStore = create<State & Action>((set) => ({
  ...defaultState,
  setUser: (user) => set({ user }),
  setCurrentPath: (currentPath) => set({ currentPath }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useAuthStore;
