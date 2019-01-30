/**
 * action类型
 * 唯一改变数据state的方式就是去触发action，
 * action是一个用于描述描述已发生事件的普通对象
 */

 /**
  * Action是把数据从应用传入store的有效载荷，他是store数据的唯一来源
  * 
  * 一般会使用store.dispatch()将action传到store
  */


  //定义action.type中的变量
 export const ADD_TODO = 'Add_Todo';
 export const DEL_TODO = 'Del_Todo';

/**
 * action中的函数是用来返回一个action对象，
 */



 /**
  * @method addTodo  增加一条内容
  * @param {String} text 增加的内容
  */
 export const addTodo = (text) => {
     console.log(text)
    return {
        type:ADD_TODO,
        text
    }
 }

/**
 * @method delTodo  删除数据
 * @param {String} text 删除数据的内容
 */
 export const delTodo = (text) => {
     return {
         type:DEL_TODO,
         text
     }
 }