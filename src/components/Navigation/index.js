import React from 'react';
import { List, Button } from 'antd';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0
		};
		this.del = this.del.bind(this);
	}

	del(e) {
		console.log(e.target.getAttribute('id')); //获取到用户点击的数据
        let text = e.target.getAttribute('id')
        this.props.del(text)
    }



	render() {
		const datas = this.props.data;

		return (
			<List
				itemLayout="horizontal"
				dataSource={datas}
				renderItem={(item) => (
					<List.Item>
                        <List.Item.Meta 
                        title={item.todo}
                        />
                            <Button type="primary" id={item.todo} onClick={(e)=>{this.del(e)}}>删除</Button>
					</List.Item>
				)}
			/>
		);
	}
}

export default Navigation;
