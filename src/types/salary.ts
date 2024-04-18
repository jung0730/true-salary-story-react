export type Post = {
  postId: string;
  taxId: string;
  companyName: string;
  title: string;
  employmentType: string;
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
  overtime: string;
  feeling: string;
  jobDescription: string;
  suggestion: string;
  tags?: number[];
  customTags?: string[];
  createDate?: string;
  isLocked: boolean;
  createUser?: string;
  type: string;
  inService: boolean;
  companyType: string;
};

export type SubmitPost = {
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
  inService: string | boolean;
};
