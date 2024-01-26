import { create } from 'zustand';
import type { Post } from '@/types/salary';

type State = {
  post: Post;
};

type Action = {
  setPost: (post: Post) => void;
};

const defaultState: State = {
  post: {
    postId: '',
    companyType: '',
    taxId: '',
    companyName: '',
    title: '',
    employmentType: '',
    inService: false,
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
    tags: [],
    customTags: [],
    createDate: '',
    isLocked: true,
    createUser: '',
    type: '',
  },
};

const useSalaryStore = create<State & Action>((set) => ({
  ...defaultState,
  setPost: (post) => set({ post }),
}));

export default useSalaryStore;
