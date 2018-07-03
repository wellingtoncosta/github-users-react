import { fork } from 'redux-saga/effects';
import watchFetchAllUsers from './user/fetchAll';
import watchFetchUserByUsername from './user/fetchByUsername'

export default function* rootSaga() {
  yield fork(watchFetchAllUsers);
  yield fork(watchFetchUserByUsername);
}