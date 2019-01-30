import {
    ADD_TODO,
    DEL_TODO
} from '../actions'


let todos

/**
 * 自调用函数，判断客户点是否已经有保存的数据。
 */
(() => {
    if (localStorage.todos) {
        console.log('读取本地缓存数据')
        todos = JSON.parse(localStorage.todos)
    } else {
        todos = []
    }
})()


/**
 * 设置默认的数据，reducer接受两个参数，数据state和动作action
 */
const todolist = (state = todos, action) => {

    switch (action.type) {

        /**
         * 判断action.type
         */
        case ADD_TODO:
            console.log('addTodo---reducer')
            //将数据添加到本地
            localStorage.setItem('todos',
                JSON.stringify([
                    ...state,
                    {
                        todo: action.text,
                        istodo: true,
                        doing: false,
                        done: false
                    }
                ])
            )
            return [
                ...state,
                {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ]
            
        /**
         * 删除数据
         */
        case DEL_TODO:
            console.log('delTodo----reducer')
            const datas = state.filter((item) => {
                let data = item.todo === action.text ? false : true
                return data
            })
            localStorage.setItem('todos',
                JSON.stringify([
                    ...datas
                ])
            )
            return datas



        default:
            return state
    }
}

export default todolist