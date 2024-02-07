import { useQuery } from 'react-query';
import { schema as salarySchema } from './queries/salary';
import { schema as userSchema } from './queries/user';

export const useUniformNumbers = (taxId: number) =>
  useQuery({ ...salarySchema.uniformNumbers(taxId), enabled: !!taxId });
export const useProfile = (token: string | undefined) => useQuery({ ...userSchema.profile, enabled: !!token });
