type BasePost = {
  taxId: string;
  companyName: string;
  title: string;
  employmentType: string;
  city: string;
  workYears: number | string;
  totalWorkYears: number | string;
  monthlySalary: number | string | null;
  dailySalary: number | string | null;
  avgWorkingDaysPerMonth: number | string | null;
  hourlySalary: number | string | null;
  avgHoursPerDay: number | string | null;
  yearlySalary: number | string | null;
  yearEndBonus: number | string | null;
  holidayBonus: number | string | null;
  profitSharingBonus: number | string | null;
  otherBonus: number | string | null;
  overtime: number | string;
  feeling: number | string;
  jobDescription: string;
  suggestion: string;
};

export type Post = BasePost & {
  postId: string;
  tags?: number[];
  customTags?: string[];
  createDate?: string;
  isLocked?: boolean;
  createUser?: string;
  type: string;
  inService: boolean;
  companyType: string;
};

export type SubmitPost = BasePost & {
  inService: string | boolean;
};

export type SubmitPostForStep1 = Omit<SubmitPost, 'jobDescription' | 'suggestion'> & {
  salaryTypes: string;
};
export type SubmitPostForStep2 = Pick<SubmitPost, 'jobDescription' | 'suggestion'>;
