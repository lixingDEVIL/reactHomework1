import React from 'react';
import ReactDOM from 'react-dom';
// import Control from './pages/Control';
// import Demo01 from './pages/Demo01'
// import App from './pages/App.js'
// import HOC, {Detail} from './pages/HOC';
// import Hook from './pages/Hook'
// import Context from './pages/context'
import TodoList from './Homework1/TodoList';
// console.log(Context);



ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   // <div>
//   //   <HOC /><Detail/>
//   // </div>,
//   <Context.Provider value='123'>
//     <Hook/>
//   </Context.Provider>,
//   document.getElementById('root')
// );
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//import $ from 'jquery';



// const List = (props)=>{
//   return <ul>
//     {
//       props.data.map(
//         (item)=><li>{item.title}</li>
//       )
//     }
//   </ul>
// }



// class Home extends React.Component{
//   constructor(props){
//       super(props);
//       this.state = {
//       data:[]
//       }
//   }
//   componentDidMount(){
//       fetch(`https://cnodejs.org/api/v1/topics`)
//       .then(res=>res.json())
//       .then(({data}) =>{
//           this.setState({data})
//       })
//   }
//   getData = (page) => {
//       fetch(`https://cnodejs.org/api/v1/topics?page=`+page)
//       .then(res=>res.json())
//       .then(({data}) =>{
//           this.setState({data})
//       })
//   }      
//   render(){
//       const{ data } = this.state;
//       const btns = [1,2,3,4,5];
//       return <div>
//           {
//               btns.map(
//                   (item)=>(
//                       <button
//                       key = {item}
//                       onClick={()=>this.getData(item)}
//                       >
//                           {item}
//                       </button>
//                   )
//               )
//           }
//           <List data={data}/>
//       </div>
//   }
// }
// const Button = ()=>{
//   const btns = [1,2,3,4,5];
//   const handleClick = (num)=>{
//     console.log(num)
//   }
//   return <div>
//     {
//       btns.map(
//         (item)=>(
//         <button key={item}
//         onClick={()=>handleClick(item)}
//         >{item}</button>))
//     }
//   </div>
// }
// class Home extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:[]
//     }
//     fetch(`https://cnodejs.org/api/v1/topics`)
//     .then(res=>res.json())
//     .then(({data}) => {
//       this.setState({data});
//     })
//   }
//   render(){
//     const {data} = this.state;
//     return <div>
//       <Button/>
//       <List data={data}/>
//     </div>
//   }
// }




// class Home extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:[]
//     }
//     // setInterval(()=>{
//     //   this.setState({data:[5,6,7,8,9]})
//     // },500)
//     fetch(`https://cnodejs.org/api/v1/topics`)
//     .then(res => res.json())
//     .then(data => {
//       //console.log(data)
//       this.setState({data:data.data})
//     })
//   }
//   render(){
//     //const {data}=this.data;
//     return <ul>
//       {
//         this.state.date.map(
//           (item)=><li>{item}</li>
//           )
//       }
//     </ul>
//   }

// }

// console.log($);



//let ele = <h1>hello react</h1>;
// let ele = <h1 id='title'>
//   <div>hello</div>
//   react
// </h1>;
// let ele = React.createElement('h1',{id:'title'},'hello react');
// console.log(ele);

// let ele =<h1 title='a' id='title' className="tit">
//   <div>hello</div>
//   react;
//   <div>['hello','world']</div>
// </h1>


// let ReactDOM = {
//   render(eleObj,container){
//     //解构
//     const {type,props} = eleObj;
//     //创建第一层节点
//     let ele=document.createElement(type);
//     //遍历属性对象，将属性添加到第一层节点对象上
//     for(const prop in props){
//       if(prop == 'children'){
//         if(typeof props.children == 'string'){
//           const txtNode = document.createTextNode(child);
//           ele.appendChild(txtNode);
//           break;
//         }
//         //将第一层节点的对象的子元素添加过去
//         props.children.forEach((child=>{
//           if(typeof child == 'string'){
//             const txtNode = document.createTextNode(child);
//             ele.appendChild(txtNode);
//           }else{
//             ReactDOM.render(child,ele);
//           }
//         }))
//         //ele.setAttribute('class',props[prop]);
//       }else{
//         ele[prop] = props[prop];
//       }
//     }
//     container.appendChild(ele);
//   }
// }


// setInterval(()=>{
//   let ele =<h1 id='title' className='tit'>
//   <div>当前时间</div>
//   {new Date().toLocaleString()}
//   </h1>

//   ReactDOM.render(
//     ele,
//     document.getElementById('root')
//   );
// },1000)



//组件声明
//函数组件
//UI(展示)组件，木偶组件
// function App(props){
//   console.log(props);
//   const {title,id} = props;
//   return <div>
//     <div>{title}</div>
//     <div>{id}</div>
//   </div>
// }


//智能组件
// class Demo extends React.Component{
//   constructor(){
//     super();
//     //声明状态
//     // this.state={
//     //   name:'tom'
//     // };
//     // setInterval(()=>{
//     //   this.setState({name:'jerry'});
//     // },3000)

//     this.state={
//       name:new Date().toLocaleString()
//     };
//     setInterval(()=>{
//       this.setState({name:new Date().toLocaleString})
//     },1000)
//   }
//   render(){
//     return <div>
//       <div>name:{this.state.name}</div>
//       <App title={this.state.name} id='app'/>
//       <App title='任意值' id='app'/>
//     </div>
//   }
// }









/* 
1.原生JS，DOM操作
2.React：开发效率高，性能高
3.环境搭建，创建一个项目、运行
4.JS语法

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
