import ApiAddresses from './addresses';

export const signUp = body => {
  return axios({
    url: ApiAddresses.USER_SIGNUP,
    method: 'POST',
    data: body,
  });
};
