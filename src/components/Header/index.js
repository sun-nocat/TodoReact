import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.textInput = React.createRef();  //使用refs获取节点
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(e) {
		console.log('用户点击');
		let text = this.textInput.current.value;  //获取输入框中的内容
        this.props.addTodo(text)
    }

	render() {
		return (
			<header>
				<form>
					<label htmlFor="new-todo">增加</label>
					<input type="text" id="new-todo" ref={this.textInput} />
					<div>
						<button onClick={(e) => this.addTodo(e)}>增加</button>
					</div>
				</form>
			</header>
		);
	}
}

export default Header;
