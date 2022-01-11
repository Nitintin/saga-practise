import { takeLatest } from 'redux-saga/effects'
import { workerSagaPost, workerSagaUser } from './WorkerSaga';

export function* watcherSaga() {
    yield takeLatest("FETCH_USER_LIST", workerSagaUser);
    yield takeLatest("FETCH_POST_LIST", (item) => workerSagaPost(item));
}