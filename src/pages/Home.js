import React,{Component} from 'react'
import List from '../Components/List'
import Buttons from './Buttons';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
        data:[]
        }
    }
    componentDidMount(){
        fetch(`https://cnodejs.org/api/v1/topics`)
        .then(res=>res.json())
        .then(({data}) =>{
            this.setState({data})
        })
    }
    getData = (page) => {
        fetch(`https://cnodejs.org/api/v1/topics?page=`+page)
        .then(res=>res.json())
        .then(({data}) =>{
            this.setState({data})
        })
    }      
    render(){
        const{ data } = this.state;
        //const btns = [1,2,3,4,5];
        return <div>
            <Buttons getData={this.getData}/>
            <List data={data}/>
        </div>
    }
}
//命名导出
export {Home}
//默认导出

//export default Home;



