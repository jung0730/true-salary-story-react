import { useQuery } from 'react-query'
import { schema as salarySchema } from './queries/salary';
import { schema as userSchema } from './queries/user';

export const useStatistics = () => useQuery({...salarySchema.statistics});
export const useProfile = () => useQuery({...userSchema.profile});