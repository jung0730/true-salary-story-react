import { cookies } from 'next/headers';
import { handleResponse } from '@/utils/handleSuccessErrorResponse';
import { Statistics, TopPost, Order, SalaryInfo } from '@/types/api';

async function fetchData<T>(url: string, args: RequestInit = {}, method = 'get'): Promise<T> {
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
  return fetch(`${process.env.API_URL}${url}`, args)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      // 要在client component 才能使用toast error
      return error;
    });
}

export const getSalaryInfo = async (id: string) => {
  const res = await fetchData<SalaryInfo>(`/api/salary/${id}`);
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

const args = {
  next: { revalidate: 3600 },
};

export const getStatistics = async () => {
  const res = await fetchData<Statistics>('/api/public/statistics', args);
  return res.data;
};

export const getTopPost = async () => {
  const res = await fetchData<TopPost>('/api/salary/getTopPost', args);
  return res.data;
};

export const getOrderList = async () => {
  const res = await fetchData<Order>('/api/account/order/list', args);
  return res.result;
};
