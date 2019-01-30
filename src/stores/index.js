import { createStore } from 'redux';
import reducer from '../reducers';

/**
 * 返回创建store的函数  configStore()
 */
export default function configStore() {
	const store = createStore(reducer);
	return store;
}
