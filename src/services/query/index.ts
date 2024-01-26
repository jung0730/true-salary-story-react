import { useQuery } from 'react-query';
import { schema as salarySchema } from './queries/salary';
import { schema as userSchema } from './queries/user';
import { getCookie } from 'cookies-next';

const token = getCookie('token');
console.log(token, 'token');
export const useStatistics = () => useQuery({ ...salarySchema.statistics });
export const useUniformNumbers = (taxId: number) =>
  useQuery({ ...salarySchema.uniformNumbers(taxId), enabled: !!taxId });
export const useProfile = () => useQuery({ ...userSchema.profile, enabled: !!token });
export const useSalaryInfo = (id: string) => useQuery({ ...salarySchema.salaryInfo(id), enabled: !!id });