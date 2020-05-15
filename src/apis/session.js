import ApiAddresses from './addresses';

export const signIn = ({email, password}) => {
  return axios({
    url: ApiAddresses.SESSION_SIGNIN,
    headers: {
      Authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
    },
    method: 'POST',
  });
};

export const signOut = () => {
  return axios({
    url: ApiAddresses.SESSION_SIGNOUT,
    headers: {
      Authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
    },
    method: 'POST',
  });
};
