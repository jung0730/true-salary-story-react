import { cookies } from 'next/headers';

async function fetchData(url: string, args: RequestInit = {}, method = 'get') {
  const BASE_API_URL = 'http://localhost:3000';
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  args = {
    method,
    credentials: 'include',
  };
  if (token?.value) {
    args.headers = {
      Authorization: `Bearer ${token?.value}`,
    };
  }

  return fetch(`${BASE_API_URL}${url}`, args)
    .then((response) => {
      const { ok } = response;
      if (ok) return response.json();
      return response.json().then((error) => {
        throw error;
      });
    })
    .catch((error) => {
      // TODO: server data fetching 如何顯示toast
      console.log(error);
    });
}

export const getSalaryInfo = async (id: string) => {
  const res = await fetchData(`/api/salary/${id}`);
  if (res?.status === 'success') {
    const { data } = res;
    return {
      postId: data.postId,
      companyType: data?.companyType || '',
      taxId: data.taxId,
      companyName: data.companyName,
      title: data.title,
      employmentType: data.employmentType,
      inService: data.inService,
      city: data.city,
      workYears: data.workYears,
      totalWorkYears: data.totalWorkYears,
      monthlySalary: data?.monthlySalary ?? '-',
      dailySalary: data?.dailySalary ?? '-',
      avgWorkingDaysPerMonth: data?.avgWorkingDaysPerMonth ?? '-',
      hourlySalary: data.hourlySalary ?? '-',
      avgHoursPerDay: data?.avgHoursPerDay ?? 8,
      yearEndBonus: data?.yearEndBonus ?? '-',
      holidayBonus: data?.holidayBonus ?? '-',
      profitSharingBonus: data?.profitSharingBonus ?? '-',
      otherBonus: data?.otherBonus ?? '-',
      yearlySalary: data.yearlySalary,
      overtime: data.overtime,
      feeling: data.feeling,
      jobDescription: data.jobDescription,
      suggestion: data.suggestion,
      tags: data?.tags || [],
      customTags: data?.customTags || [],
      createDate: data?.createDate || '',
      isLocked: data.isLocked,
      createUser: data?.createUser || '',
      type: data?.type || '',
    };
  }
};

export const getStatistics = async () => {
  const args = {
    next: { revalidate: 3600 },
  };
  const res = await fetchData('/api/public/statistics', args);
  return res.data;
};