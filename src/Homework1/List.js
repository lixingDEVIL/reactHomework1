import React, { Component } from 'react'

export class List extends Component {
    toggle = (idx) => {
        this.props.tog(idx)
    }
    delTodo = (idx) => {
        this.props.del(idx)
    }
    renderTodos=(done)=>{
        let todos = this.props.todos;
        return todos.map((todo,idx)=>{
            if(done==todo.done){
               return <li>
               <input 
               onClick={()=>this.toggle(idx)}
               checked={done}
               type="checkbox"
               />
               <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
               <button 
               onClick={()=>this.delTodo(idx)}
               >删除</button>
           </li>
            }
           
        })
   }
    render() {
        let todos = this.props.todos;
        let arr1 = todos.filter((item)=>!item.done);
        let arr2 = todos.filter((item)=> item.done);
        return (
            <div>
                <h2>正在进行{arr1.length}</h2>
                <ul>
                    {
                       this.renderTodos(false) 
                    }
                         
                </ul>                   
                <h2>已经完成{arr2.length}</h2>
                <ul>
                    {
                        this.renderTodos(true)
                    }
                </ul>
            </div>
        )
    }
}

export default List
