import { post } from '../../../utils/fetch';

export const postSalary = async (data) => {
  const { message } = await post('/api/salary', data);
  return message;
};
