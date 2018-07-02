import { fork } from 'redux-saga/effects';
import watchFetchAllUsers from './user/fetchAll';

export default function* rootSaga() {
  yield fork(watchFetchAllUsers);
}