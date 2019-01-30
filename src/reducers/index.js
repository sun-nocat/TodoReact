import { combineReducers } from 'redux';
// combineReducers将多个reducer合并为一个reducer
import todolist from './todo';

const reducer = combineReducers({
	todolist
});

export default reducer;
