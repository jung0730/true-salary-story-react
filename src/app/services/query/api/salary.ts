import { get } from '../../../utils/fetch';

export const getStatistics = async () => {
  const res = await get('/api/public/statistics');
  const { registeredUsers, publishedPosts } = res;
  return res;
};

export const getTopPost = async () => {
  const res = await get('/api/salary/getTopPost');
  const { latestPost, popularPost } = res;
};

export const getTopCompany = async () => {
  const res = await get('/api/salary/getTopCompany');
  const { companies } = res;
};

export const getPostResults = async () => {
  const res = await get(`/api/salary/search?companyName=${companyName}&type=${type}&title=${title}&page=${page}&limit=${limit}`);
  const { companyResults, companyResultsCount, titleResults, titleResultsCount, typeResults, typeResultsCount } = res;
};

export const getCompanyTitles = async (taxId: string) => {
  const res = await get(`/api/salary/company/${taxId}/title`);
  const { result } = res;
};

export const getCompanySalaries = async () => {
  const res = await get(
    `/api/salary/company/${taxId}?sortOption=${sortOption}&titleOption=${titleOption}&page=${page}&limit=${limit}`,
  );
  const { result, totalCount } = res;
  const data = result.map((el) => {
    return {
      postId: el?.postId || '',
      companyType: el?.companyType || '',
      taxId: el?.taxId || '',
      companyName: el?.companyName || '',
      title: el?.title || '',
      employmentType: el?.employmentType || '',
      inService: el?.inService !== undefined && el.inService,
      city: el?.city || '',
      workYears: el?.workYears || 0,
      totalWorkYears: el?.totalWorkYears || 0,
      monthlySalary: el.monthlySalary,
      dailySalary: el.dailySalary,
      avgWorkingDaysPerMonth: el?.avgWorkingDaysPerMonth ?? '-',
      hourlySalary: el.hourlySalary,
      avgHoursPerDay: el?.avgHoursPerDay ?? 8,
      yearEndBonus: el?.yearEndBonus ?? '-',
      holidayBonus: el?.holidayBonus ?? '-',
      profitSharingBonus: el?.profitSharingBonus ?? '-',
      otherBonus: el?.otherBonus ?? '-',
      yearlySalary: el?.yearlySalary ?? '-',
      overtime: el?.overtime || '',
      feeling: el?.feeling || '',
      jobDescription: el?.jobDescription || '',
      suggestion: el?.suggestion || '',
      tags: el?.tags || [],
      customTags: el?.customTags || [],
      createDate: el?.createDate || '',
      isLocked: el?.isLocked !== undefined ? el.isLocked : true,
      createUser: el?.createUser || '',
      type: el.type,
    };
  });
};

export const getTopCompanyType = async () => {
  const res = await get('/api/salary/getTopCompanyType');
  const { companyTypes } = res;
};

export const getCompanyInfo = async (taxId: string) => {
  const res = await get(`/api/salary/company/${taxId}/infos`);
  const { result } = res;
};
