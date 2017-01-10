import { combineReducers } from 'redux';
import GifsReducer from './gifsReducer'

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
