import { post } from '../../../utils/fetch';

export const postSalary = async (data) => {
  const res = await post('/api/salary', data);
  return res;
};
