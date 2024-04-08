import { User } from '@/types/user';
import { create } from 'zustand';

type State = {
  user: User;
  isLogin: boolean;
};

type Action = {
  setUser: (user: User) => void;
  setIsLogin: (value: boolean) => void;
};

const defaultState: State = {
  user: {
    displayName: '',
    email: '',
    profilePicture: '',
    points: {
      point: 0,
    },
  },
  isLogin: false,
};

const useAuthStore = create<State & Action>((set) => ({
  ...defaultState,
  setUser: (user) => set({ user }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useAuthStore;
