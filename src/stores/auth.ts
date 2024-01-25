import { create } from 'zustand';

type State = {
  user: {
    name: string;
    picture: string;
  };
  currentPath: string;
  isLogin: boolean;
};

type Action = {
  setUser: (user: {}) => void;
  setCurrentPath: (currentPath: string) => void;
  setIsLogin: (value: boolean) => void;
};

const defaultState: State = {
  user: {
    name: '',
    picture: '',
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
