import * as api from '../api/salary';

export const schema = {
  uniformNumbers: (taxId: number) => ({
    queryKey: ['uniformNumbers', taxId],
    queryFn: () => api.getUniformNumbers(taxId),
  }),
};
