import {all} from 'redux-saga/effects'
import {upload} from './upload'
function * rootSaga(){
    yield all([
      ...upload,
    ])
}
export default rootSaga;