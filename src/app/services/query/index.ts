import { useQuery } from 'react-query';
import { schema as salarySchema } from './queries/salary';
import { schema as userSchema } from './queries/user';
import { getCookie } from 'cookies-next';

const token = getCookie('token');
export const useStatistics = () => useQuery({...salarySchema.statistics});
export const useProfile = () => useQuery({...userSchema.profile, enabled: !!token});
