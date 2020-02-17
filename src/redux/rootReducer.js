import { combineReducers } from 'redux';
import phonebookAppReducer from './phonebookApp/phonebookAppReducer';

const rootReducer = combineReducers({
  phonebookApp: phonebookAppReducer,
});
export default rootReducer;
