
import React, { Component } from 'react'
//import './control.css';



//组件名首字母一定要大写
 class Control extends Component {
     
    constructor(){
        super();
        this.state = {
            inpValue:'',
            todos:[
                {title:'1',done:false},
                {title:'2',done:true},
                {title:'3',done:true},
                {title:'4',done:false},
               ]
        }
    }
    handleChange=(e)=>{
        this.setState({inpValue:e.target.value})
        console.log(e.target.value)
    }
//    componentDidMount(){
//         this.input.focus(),
//     } 
    addTodo=()=>{
        if(this.state.inpValue == ''){
           return;
        }
        this.setState({
            todos:[
                {
                    title:this.state.inpValue,
                    done:false
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''})
        
        //this.state.todos.push({title:this.state.inpValue})
       
    }
    delTodo=(idx)=>{
        // let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        // newTodos.splice(idx,1)
        // this.setState({todos:newTodos})
        this.setState(
            {
                todos:this.state.todos.filter((item,index)=>index!=idx)
            }
        );
        localStorage.setItem(
            'todo',
            JSON.stringify(this.state.todos)
        )
    }
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done
        this.setState({
            todos:newTodos
        })
    }
    renderTodos=(done)=>{
        return this.state.todos.map((todo,idx)=>{
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
        const {todos,inpValue} = this.state;
        let arr1 = todos.filter((item)=>!item.done)
        //console.log(arr1)
        return (
            <div>
                <label htmlFor="inp">todolist</label>
                <input 
                id='inp'
                ref={inp=>this.input=inp}
                type='text' 
                value={inpValue}
                onChange={this.handleChange}/>
                <button
                onClick={this.addTodo}>添加</button>
                <h2>正在进行{arr1.length}</h2>
                <ul>
                    {
                       this.renderTodos(false) 
                    }
                         
                </ul>
                    
                <h2>已经完成</h2>
                <ul>
                    {
                        this.renderTodos(true)
                    }
                </ul>
                {/* <ul>
                    {
                        todos.map((todo,idx)=>(
                            <li>
                                <input type="checkbox"/>
                                <span>{todo.title}</span>
                                <button 
                                onClick={()=>this.delTodo(idx)}
                                >删除</button>
                            </li>
                        ))
                    }
                </ul> */}
            </div>
        )
    }
}

export default Control;
