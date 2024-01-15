import { get } from '../../../utils/fetch'

export const getProfile = async () => {
  const res = await get('/api/user/profile');
  const { user } = res;
}