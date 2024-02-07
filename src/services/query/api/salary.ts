import { get } from '@/utils/fetch';

type ResUniformNumbers = {
  companyName: string;
  isExist: boolean;
};

export const getUniformNumbers = async (taxId: number) => {
  const res = await get<ResUniformNumbers>(`/api/salary/uniformNumbers/${taxId}`);
  const { isExist, companyName } = res;
  return { isExist, companyName };
};
