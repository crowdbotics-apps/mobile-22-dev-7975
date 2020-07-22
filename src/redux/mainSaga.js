import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth39246Saga from '../features/EmailAuth39246/redux/sagas';
import EmailAuth39243Saga from '../features/EmailAuth39243/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth39246Saga,
EmailAuth39243Saga,
    
  ]);
}