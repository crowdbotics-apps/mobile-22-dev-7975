import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth39246Reducer from '../features/EmailAuth39246/redux/reducers';
import EmailAuth39243Reducer from '../features/EmailAuth39243/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth39246: EmailAuth39246Reducer,
EmailAuth39243: EmailAuth39243Reducer,

});