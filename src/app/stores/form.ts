import { create } from 'zustand';

type State = {
  step: number;
  formData: object;
}

type Action = {
  setStep: (step: State['step']) => void;
  setFormData: (step: State['formData']) => void;
}

const defaultState: State = {
  step: 1,
  formData: {},
};

const useFormStore = create<State & Action>((set => ({
  ...defaultState,

  setStep: (step) => set({ step }),
  setFormData: (formData) => set({ formData }),
})));

export default useFormStore;
