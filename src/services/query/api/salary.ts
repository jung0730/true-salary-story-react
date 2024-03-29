import { get } from '@/utils/fetch';
import { UniformNumbers } from '@/types/api';

export const getUniformNumbers = async (taxId: number) => {
  const res = await get<UniformNumbers>(`/api/salary/uniformNumbers/${taxId}`);
  const { isExist, companyName } = res;
  return { isExist, companyName };
};
