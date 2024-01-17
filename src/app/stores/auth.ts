import { create } from 'zustand';

type State = {
  user: {};
  currentPath: string,
}

type Action = {
  setUser: (user: {}) => void;
  setCurrentPath: (currentPath: string) => void;
}

const defaultState: State = {
  user: {
    name: '',
  },
  currentPath: '',
};

const useAuthStore = create<State & Action>((set) => ({
  ...defaultState,
  setUser: (user) => set(({ user })),
  setCurrentPath: (currentPath) => set(({ currentPath })),
}));

export default useAuthStore;
