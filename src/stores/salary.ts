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
    workYears: 0,
    totalWorkYears: 0,
    monthlySalary: 0,
    dailySalary: 0,
    avgWorkingDaysPerMonth: 0,
    hourlySalary: 0,
    avgHoursPerDay: 0,
    yearEndBonus: 0,
    holidayBonus: 0,
    profitSharingBonus: 0,
    otherBonus: 0,
    yearlySalary: 0,
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
