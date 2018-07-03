import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../actions';
import { BASE_URL } from '../apiUrl';
import Axios from 'axios';

const fetchByUsername = username => {
  return Axios.get(`${BASE_URL}/users/${username}`)
    .then(response => {
      const { data, status } = response;
      if (status >= 400) {
        return { error: 'Could not fetch user details.' };
      } else {
        return { user: data };
      }
    })
    .catch(() => {
      return { error: 'Could not fetch user details.' };
    });
}

export function* prepareSaga(action) {
  const payload = yield call(fetchByUsername, action.username);
  const { error } = payload;
  if (error) {
    yield put({ type: actions.user.FETCH_BY_USERNAME_ERROR, error });
  } else {
    const { user } = payload;
    yield put({ type: actions.user.FETCH_BY_USERNAME_SUCCESS, user });
  }
}

export default function* watchFetchUserByUsername() {
  yield takeLatest(actions.user.FETCH_BY_USERNAME, prepareSaga)
}