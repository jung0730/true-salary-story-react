import { create } from 'zustand';

type State = {
  step: number;
  formData: object;
  post: object[];
};

type Action = {
  setStep: (step: State['step']) => void;
  setFormData: (step: State['formData']) => void;
  setPost: (step: State['post']) => void;
};

const defaultState: State = {
  step: 1,
  formData: {},
  post: [{}],
};

const useFormStore = create<State & Action>((set) => ({
  ...defaultState,

  setStep: (step) => set({ step }),
  setFormData: (formData) => set({ formData }),
  setPost: (post) => set({ post }),
}));

export default useFormStore;
