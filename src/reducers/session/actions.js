import * as Types from './types';

import {Session as SessionApis} from '@/apis';

export const signIn = () => (dispatch, getState) => {
  const {email, paswd} = getState().form.signin.values;
  const signInData = {
    email: email,
    paswd: paswd.trim(),
  };

  dispatch({type: Types.SIGN_IN_START});
  dispatch(requestActions.start());

  SessionApis.signIn(signInData)
    .then(response => {
      storage.saveSession(response.data);
      const {user, tokens} = response.data;
      dispatch({
        type: Types.SIGN_IN_SUCCESS,
        payload: {user, tokens},
      });
      const {os, fcmToken, brand, deviceUniqueId} = getState().notifications;
      if (user.isNotificationsEnabled && fcmToken.length) {
        const deviceInfo = {
          os,
          fcmToken,
          brand,
          deviceUniqueId,
        };
        dispatch(sendDeviceToken(user.id, deviceInfo));
      }
      storage.saveUser(response.data);
      dispatch(requestActions.success());
    })
    .catch(error => {
      dispatch({type: Types.SIGN_IN_FAIL});
      dispatch(requestActions.fail(error));
    });
};
