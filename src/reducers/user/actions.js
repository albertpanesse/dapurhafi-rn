import * as Types from './types';

import {User as UserApis} from '@/apis';

export const signUp = navigation => (dispatch, getState) => {
  const {
    email,
    username,
    password,
    dob,
    mobileNumber,
  } = getState().form.signup.values;

  const {ISOcode, callingCode} = getState().profileReducer;

  const signUpData = {
    email: email.trim().toLowerCase(),
    username: username.trim(),
    password: password.trim(),
    mobileNumber: {
      region: ISOcode,
      cc: `${callingCode}`,
      number: `${mobileNumber}`,
    },
    dob,
  };

  dispatch({type: Types.SIGN_UP_START});

  UserApis.signUp(signUpData)
    .then(async response => {
      storage.saveSession(response.data);
      const {user, tokens} = response.data;
      await dispatch({
        type: Types.SIGN_UP_SUCCESS,
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
        try {
          var res = await apiSendDeviceToken(user.id, deviceInfo);
          console.log(`res: ${res}`);
          // dispatch({type: Types.SEND_DEVICE_TOKEN_SUCCESS});
        } catch (err) {
          console.log(`error: ${err}`);
          // dispatch({type: Types.SEND_DEVICE_TOKEN_FAIL});
        }
      }
      console.log('sending otp code after register...(start)'); //added by QQ
      // navigation.navigate('Interests');
      await apiSendOTPCode()
        .then(async () => {
          console.log('====>');
          await dispatch(requestActions.success());
          navigation.navigate('VerifyCode');
        })
        .catch(error => {
          dispatch(requestActions.fail(error));
        });
    })
    .catch(error => {
      if (error.response) {
        navigation.goBack();
      }
      dispatch({type: Types.SIGN_UP_FAIL});
      dispatch(requestActions.fail(error));
    });
};
