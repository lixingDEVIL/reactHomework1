import React, { Component } from 'react'
import Input from './Input'
import List from './List'

class TodoList extends Component {

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


    componentDidMount(){
        // this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos:JSON.parse(todos)
            })
        }
    }
    
    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
        return true;
    }
    
    


    addTodo=()=>{
        if(this.state.inpValue == ''){
            alert("不能添加空值");
        //    return;
        }else{
            this.setState({
                todos:[
                    {
                        title:this.state.inpValue,
                        done:false
                    },
                    ...this.state.todos
                ]
            })
           
        }
        this.setState({inpValue:''});
        var inp = document.getElementById('inp');
        inp.value = '';
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
    render() {
        // const {todos} = this.state;
         let inpValue = this.state.inpValue;
        return (
            <div className="reactTodoList">
                <h2>TodoList</h2>
                <Input 
                // todos={this.state.todos} 
                value = {inpValue} 
                add = {this.addTodo}
                onChange = {this.handleChange} 
                />
                <List 
                todos={this.state.todos} 
                tog = {this.toggle} 
                del = {this.delTodo} />              
                
            </div>
        )
    }
}

export default TodoList
