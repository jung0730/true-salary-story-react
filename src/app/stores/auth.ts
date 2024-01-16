import { create } from 'zustand';

type State = {
  user: {};
}

type Action = {
  setUser: (user: {}) => void;
}

const defaultState: State = {
  user: {
    name: ''
  },
};

const useAuthStore = create<State & Action>((set) => ({
  ...defaultState,
  setUser: (user) => set(({ user })),
}));

export default useAuthStore;
