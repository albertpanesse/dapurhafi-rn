export const editPhoneCode = code => dispatch => {
  dispatch({type: Types.UPDATE_PHONE_CODE, payload: code});
};
