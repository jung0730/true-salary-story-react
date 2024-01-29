export type Post = {
  postId: string;
  companyType: string;
  taxId: string;
  companyName: string;
  title: string;
  employmentType: string;
  inService: boolean;
  city: string;
  workYears: number;
  totalWorkYears: number;
  monthlySalary: number;
  dailySalary: number;
  avgWorkingDaysPerMonth: number;
  hourlySalary: number;
  avgHoursPerDay: number;
  yearlySalary: number;
  yearEndBonus: number;
  holidayBonus: number;
  profitSharingBonus: number;
  otherBonus: number;
  overtime: number;
  feeling: number;
  jobDescription: string;
  suggestion: string;
  tags?: number[];
  customTags?: string[];
  createDate?: string;
  isLocked?: boolean;
  createUser?: string;
  type: string;
};

type SubmitPost = {
  companyType: string;
  taxId: string;
  companyName: string;
  title: string;
  employmentType: string;
  inService: boolean | string;
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
  salaryTypes: string;
};

export type SubmitPostForStep1 = Omit<SubmitPost, 'jobDescription' | 'suggestion'>;
export type SubmitPostForStep2 = Pick<SubmitPost, 'jobDescription' | 'suggestion'>;
