import React from 'react'
import Context from './context'

const Demo02 = () => {
    return (        
        <div style={{width:100,height:100}}>
            <h2>Demo02</h2>
            <ul>
                <Context.Consumer>
                    {
                        ({data})=>data.map((item)=><li key={item}>{
                            item}</li>)
                        
                    }
                </Context.Consumer>
                <Context.Consumer>
                    {
                        ({changeData})=><button onClick={()=>changeData(123)}>点击</button>
                        
                    }
                </Context.Consumer>
            </ul>           
        </div>
    )
}

export default Demo02
