import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Provider } from
import App from './container/App';
import './index.css';
import configStore from './stores';
import "antd/dist/antd.css";

/**
 * 创建store
 */
console.log('创建store')
const store = configStore();

function Index() {
    console.log('匹配路由')
	return (
		<Provider store={store}>
			<HashRouter>
				<Route path="/" component={App} />
			</HashRouter>
		</Provider> 
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
