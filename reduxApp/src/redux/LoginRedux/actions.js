import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
);

export const SignUpTypes = makeConstantCreator(
  'USER_SIGNUP',
  'USER_SIGNUP_SUCCESS',
  'USER_SIGNUP_FAILURE',
);

const userSignUp = (data) => makeActionCreator(SignUpTypes.USER_SIGNUP, { data });
const userSignUpSuccess = (response) =>
  makeActionCreator(SignUpTypes.USER_SIGNUP_SUCCESS, { response });
const userSignUpFailure = (error) => makeActionCreator(SignUpTypes.USER_SIGNUP_FAILURE, { error });

const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });

export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userSignUp,
  userSignUpSuccess,
  userSignUpFailure,
};
