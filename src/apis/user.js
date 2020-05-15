import ApiAddresses from './addresses';

export const register = body => {
  return axios({
    url: ApiAddresses.USER_REGISTER,
    method: 'POST',
    data: body,
  });
};
