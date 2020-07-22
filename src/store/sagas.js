import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* get_albums_readWorker(action) {
  try {
    const result = yield call(apiService.get_albums_read, action)
    yield put(actions.get_albums_readSucceeded(result))
  } catch (err) {
    yield put(actions.get_albums_readFailed(err))
  }
}
function* get_albums_readWatcher() {
  yield takeEvery(types.GET_ALBUMS_READ, get_albums_readWorker)
}
export default function* rootSaga() {
  const sagas = [get_albums_readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
