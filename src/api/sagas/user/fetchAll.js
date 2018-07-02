import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../actions';
import { BASE_URL } from '../apiUrl';
import Axios from 'axios';

const fetchAll = () => {
  return Axios.get(`${BASE_URL}/users`)
    .then(response => {
      const { data, status } = response;
      if (status >= 400) {
        return { error: 'Could not fetch users.' };
      } else {
        return { users: data };
      }
    })
    .catch(() => {
      return { error: 'Could not fetch users.' };
    });
}

export function* prepareSaga() {
  const payload = yield call(fetchAll);
  const { error } = payload;
  if (error) {
    yield put({ type: actions.user.FETCH_ALL_ERROR, error });
  } else {
    const { users } = payload;
    yield put({ type: actions.user.FETCH_ALL_SUCCESS, users });
  }
}

export default function* watchFetchAllUsers() {
  yield takeLatest(actions.user.FETCH_ALL, prepareSaga)
}