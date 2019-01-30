import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'

import { addTodo , delTodo } from '../actions';
import Header from '../components/Header';
import Navigation from '../components/Navigation'

/**
 * 整体组件的位置，整体的容器组件
 */
class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {};
        this.delete = this.delete.bind(this)
	}

	/**
     * 组件展示在页面的钩子函数
     */
	componentDidMount() {
		// this.setState
    }
    

    delete(text){
        console.log(text)

        const delTodos = this.props.delTodos
        delTodos(text)

    }

	render() {
		/**
         * 这里的addTodos就是通过react-redux中的connect方法将store和组件连接起来之后，将分发reducer的函数传递给了props
         */
		const { addTodos,todolist } = this.props;

		return (
			<div>
				{/**
                Header组件，传递addTodo方法，接受todo增加的内容，text为具体的内容
                */}
				<Header addTodo={(text) => addTodos(text)} />
                {/**
        
                */}
                <Navigation data={todolist} del={(id)=>this.delete(id)} ></Navigation>  
			</div>
		);
	}
}

//类型检测
// App.prototype = {
//     todolist:PropTypes.arrayOf(
//         PropTypes.shape({
//             todo: PropTypes.string.isRequired,
//             istodo: PropTypes.bool.isRequired,
//             doing: PropTypes.bool.isRequired,
//             done: PropTypes.bool.isRequired
//         }).isRequired
//     ).isRequired
// }

const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};

const mapDispatchToProps = (dispatch) => {
	return {
		/**
         * 返回一个对象
         * 将action作为props传递给组件
         * 为了让组件可以调用action去改变store中给的数值
         */
		addTodos: (text) => {
			console.log(text);
			dispatch(addTodo(text)); //分发一个action
        },
        delTodos: (text) => {
            dispatch(delTodo(text))
        }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
