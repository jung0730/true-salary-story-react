import * as api from '../api/user';

export const schema = {
  profile: {
    queryKey: ['profile'],
    queryFn: api.getProfile
  },
}
