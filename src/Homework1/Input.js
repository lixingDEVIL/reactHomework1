import React, { Component } from 'react'

export class Input extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         inpValue:'',
    //         todos:[]
    //     }
    // }
    handleChange=(e)=>{
        this.props.onChange(e);
        // this.setState({inpValue:e.target.value})
        // console.log(e.target.value)
    }
    addTodo = () => {
        this.props.add();
    }
   
    render() {
        let inpValue = this.props.inpValue;
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
                
            </div>
        )
    }
}

export default Input
