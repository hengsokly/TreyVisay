import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'react-final-form';

const appReducer = combineReducers({
  form
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action)
}

export default createStore(rootReducer);
