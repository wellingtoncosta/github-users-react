import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../actions';
import { BASE_URL } from '../apiUrl';
import Axios from 'axios';

const fetchAllByUsername = username => {
  return Axios.get(`${BASE_URL}/users/${username}/repos`)
    .then(response => {
      const { data, status } = response;
      if (status >= 400) {
        return { error: 'Could not fetch user repos.' };
      } else {
        return { repos: data };
      }
    })
    .catch(() => {
      return { error: 'Could not fetch user repos.' };
    });
}

export function* prepareSaga(action) {
  const payload = yield call(fetchAllByUsername, action.username);
  const { error } = payload;
  if (error) {
    yield put({ type: actions.repo.FETCH_BY_USERNAME_ERROR, error });
  } else {
    const { repos } = payload;
    yield put({ type: actions.repo.FETCH_BY_USERNAME_SUCCESS, repos });
  }
}

export default function* watchFetchReposByUsername() {
  yield takeLatest(actions.repo.FETCH_BY_USERNAME, prepareSaga)
}