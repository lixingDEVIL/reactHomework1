import React,{useState,useEffect,useContext} from 'react'
import Context from './context'

let i=0;
const Hook = () => {
    const context = useContext(Context);
    console.log(context)
    const [time,setTime] = useState(new Date().toLocaleString());
  //  const [data,setData] = useState(123);
    //第二各参数是空数组时相当于componentDidMount
    useEffect(()=>{
        console.log('effect')
        setInterval(()=>{
            console.log(i++);
            setTime(new Date().toLocaleString())
        },1000)
        return ()=>{
            console.log('componentWillUnmount')
        }
    },[]);
    //第二个参数不加或者指定某个值时相当于component
    useEffect(()=>{
        console.log(1);
    })
    return (
        <div>
            {time}
        <h1>{context}</h1>
        </div>
    )
}

export default Hook
