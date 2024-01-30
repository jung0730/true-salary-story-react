type BasePost = {
  taxId: string;
  companyName: string;
  title: string;
  employmentType: string;
  city: string;
  workYears: number | string;
  totalWorkYears: number | string;
  monthlySalary: number | string;
  dailySalary: number | string;
  avgWorkingDaysPerMonth: number | string;
  hourlySalary: number | string;
  avgHoursPerDay: number | string;
  yearlySalary: number | string;
  yearEndBonus: number | string;
  holidayBonus: number | string;
  profitSharingBonus: number | string;
  otherBonus: number | string;
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
