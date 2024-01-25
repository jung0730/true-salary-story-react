import { create } from 'zustand';

type State = {
  post: {};
};

type Action = {
  setPost: (step: State['post']) => void;
};

const defaultState: State = {
  post: {},
};

const useSalaryStore = create<State & Action>((set) => ({
  ...defaultState,
  setPost: (post) => set({ post }),
}));

export default useSalaryStore;
