import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../actions';
import { BASE_URL } from '../apiUrl';

const fetchAll = () => {
  return fetch(`${BASE_URL}/users`)
    .then(response => {
      if (response.status >= 400) {
        return { error: 'Could not fetch users.' };
      }
      return response.json();
    }).then(json => json);
}

export function* prepareSaga() {
  const payload = yield call(fetchAll);
  const { error } = payload;
  if (error) {
    yield put({ type: actions.user.FETCH_ALL_ERROR, error });
  } else {
    yield put({ type: actions.user.FETCH_ALL_SUCCESS, payload });
  }
}

export default function* watchFetchAllUsers() {
  yield takeLatest(actions.user.FETCH_ALL, prepareSaga)
}