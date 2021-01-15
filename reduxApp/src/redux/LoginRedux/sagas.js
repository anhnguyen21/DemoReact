import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes, SignUpTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi, userRegisterApi } from '../../api/auth';
import { NavigationUtils } from '../../navigation';

export function* userLoginSaga({ data }) {
  console.log(data);
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    console.log(newResponse);
    yield put(LoginActions.userLoginSuccess(newResponse));
    NavigationUtils.startMainContent();
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}

export function* userSignUpSaga({ data }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    console.log(newResponse);
    yield put(LoginActions.userSignUpSuccess(newResponse));
    NavigationUtils.startMainContent();
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userSignUpFailure(error));
  }
}

const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(SignUpTypes.USER_SIGNUP, userSignUpSaga),
];

export default loginSagas();
