import { get } from '@/utils/fetch';
import type { Post } from '@/types/salary';

type ResStatisticsType = {
  data: {
    registeredUsers: number;
    publishedPosts: number;
  };
};

export const getStatistics = async () => {
  const res = await get<ResStatisticsType>('/api/public/statistics');
  return res.data;
};

// export const getTopPost = async () => {
//   const res = await get('/api/salary/getTopPost');
//   const { latestPost, popularPost } = res;
// };

// export const getTopCompany = async () => {
//   const res = await get('/api/salary/getTopCompany');
//   const { companies } = res;
// };

// export const getPostResults = async () => {
//   const res = await get(
//     `/api/salary/search?companyName=${companyName}&type=${type}&title=${title}&page=${page}&limit=${limit}`
//   );
//   const { companyResults, companyResultsCount, titleResults, titleResultsCount, typeResults, typeResultsCount } = res;
// };

// export const getCompanyTitles = async (taxId: string) => {
//   const res = await get(`/api/salary/company/${taxId}/title`);
//   const { result } = res;
// };

// export const getCompanySalaries = async () => {
//   const res = await get(
//     `/api/salary/company/${taxId}?sortOption=${sortOption}&titleOption=${titleOption}&page=${page}&limit=${limit}`
//   );
//   const { result, totalCount } = res;
//   const data = result.map((el) => {
//     return {
//       postId: el?.postId || '',
//       companyType: el?.companyType || '',
//       taxId: el?.taxId || '',
//       companyName: el?.companyName || '',
//       title: el?.title || '',
//       employmentType: el?.employmentType || '',
//       inService: el?.inService !== undefined && el.inService,
//       city: el?.city || '',
//       workYears: el?.workYears || 0,
//       totalWorkYears: el?.totalWorkYears || 0,
//       monthlySalary: el.monthlySalary,
//       dailySalary: el.dailySalary,
//       avgWorkingDaysPerMonth: el?.avgWorkingDaysPerMonth ?? '-',
//       hourlySalary: el.hourlySalary,
//       avgHoursPerDay: el?.avgHoursPerDay ?? 8,
//       yearEndBonus: el?.yearEndBonus ?? '-',
//       holidayBonus: el?.holidayBonus ?? '-',
//       profitSharingBonus: el?.profitSharingBonus ?? '-',
//       otherBonus: el?.otherBonus ?? '-',
//       yearlySalary: el?.yearlySalary ?? '-',
//       overtime: el?.overtime || '',
//       feeling: el?.feeling || '',
//       jobDescription: el?.jobDescription || '',
//       suggestion: el?.suggestion || '',
//       tags: el?.tags || [],
//       customTags: el?.customTags || [],
//       createDate: el?.createDate || '',
//       isLocked: el?.isLocked !== undefined ? el.isLocked : true,
//       createUser: el?.createUser || '',
//       type: el.type,
//     };
//   });
// };

type ResSalaryInfo = {
  message: string;
  result: Post;
};

export const getSalaryInfo = async (id: string) => {
  const res = await get<ResSalaryInfo>(`/api/salary/${id}`);
  if (res?.message === 'success') {
    const { result } = res;
    return {
      postId: result?.postId || '',
      companyType: result?.companyType || '',
      taxId: result?.taxId || '',
      companyName: result?.companyName || '',
      title: result?.title || '',
      employmentType: result?.employmentType || '',
      inService: result?.inService !== undefined && result.inService,
      city: result?.city || '',
      workYears: result?.workYears || 0,
      totalWorkYears: result?.totalWorkYears || 0,
      monthlySalary: result.monthlySalary,
      dailySalary: result.dailySalary,
      avgWorkingDaysPerMonth: result?.avgWorkingDaysPerMonth ?? '-',
      hourlySalary: result.hourlySalary,
      avgHoursPerDay: result?.avgHoursPerDay ?? 8,
      yearEndBonus: result?.yearEndBonus ?? '-',
      holidayBonus: result?.holidayBonus ?? '-',
      profitSharingBonus: result?.profitSharingBonus ?? '-',
      otherBonus: result?.otherBonus ?? '-',
      yearlySalary: result?.yearlySalary ?? '-',
      overtime: result?.overtime || '',
      feeling: result?.feeling || '',
      jobDescription: result?.jobDescription || '',
      suggestion: result?.suggestion || '',
      tags: result?.tags || [],
      customTags: result?.customTags || [],
      createDate: result?.createDate || '',
      isLocked: result?.isLocked !== undefined ? result.isLocked : true,
      createUser: result?.createUser || '',
      type: result.type,
    };
  }
};

// export const getTopCompanyType = async () => {
//   const res = await get('/api/salary/getTopCompanyType');
//   const { companyTypes } = res;
// };

// export const getCompanyInfo = async (taxId: string) => {
//   const res = await get(`/api/salary/company/${taxId}/infos`);
//   const { result } = res;
// };

type ResUniformNumbers = {
  companyName: string;
  isExist: boolean;
};

export const getUniformNumbers = async (taxId: number) => {
  const res = await get<ResUniformNumbers>(`/api/salary/uniformNumbers/${taxId}`);
  const { isExist, companyName } = res;
  return { isExist, companyName };
};
