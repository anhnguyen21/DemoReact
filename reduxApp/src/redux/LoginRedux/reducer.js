import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  loginResponse: null,
  token: null,
  loginType: '',
});

export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

export const userSign = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userSignSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
  });
export const userSignFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,

  [LoginTypes.USER_SIGNUP]: userSign,
  [LoginTypes.USER_SIGNUP_SUCCESS]: userSignSuccess,
  [LoginTypes.USER_SIGNUP_FAILURE]: userSignFailure,
});

export default reducer;
