import userReducer, {UsersInitial} from './user/reducers';

export const RESET = 'RESET';
import {combineReducers} from 'redux';

export interface RootState {
  user: UsersInitial;
}

const mainReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET) {
    state = undefined;
  }
  return mainReducer(state, action);
};

export default rootReducer;
