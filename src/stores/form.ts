import { create } from 'zustand';
import { SubmitPost } from '@/types/salary';

type State = {
  step: number;
  formData: SubmitPost;
  result: {
    title: string;
    companyName: string;
    point: number;
  };
};

type Action = {
  setStep: (step: State['step']) => void;
  setFormData: (step: State['formData']) => void;
  setResult: (step: State['result']) => void;
};

const defaultState: State = {
  step: 1,
  formData: {
    taxId: '',
    companyName: '',
    title: '',
    employmentType: '',
    inService: '',
    city: '',
    workYears: '',
    totalWorkYears: '',
    monthlySalary: '',
    dailySalary: '',
    avgWorkingDaysPerMonth: '',
    hourlySalary: '',
    avgHoursPerDay: '',
    yearEndBonus: '',
    holidayBonus: '',
    profitSharingBonus: '',
    otherBonus: '',
    yearlySalary: '',
    overtime: '',
    feeling: '',
    jobDescription: '',
    suggestion: '',
  },
  result: {
    title: '',
    companyName: '',
    point: 0,
  },
};

const useFormStore = create<State & Action>((set) => ({
  ...defaultState,

  setStep: (step) => set({ step }),
  setFormData: (formData) => set({ formData }),
  setResult: (result) => set({ result }),
}));

export default useFormStore;
