import { useQuery } from 'react-query'
import { schema as salarySchema } from './queries/salary';

export const useStatistics = () => useQuery({...salarySchema.statistics})