import React, {Component} from 'react';
import store from './store';

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().todo.list
        }
        store.subscribe(() => {
            this.setState({
                list: store.getState().todo.list
            })
        })

    }
    handleAdd = (e)=>{
        if(e.keyCode === 13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            e.target.value="";
        }
    }
    handledel = (i)=>{
        store.dispatch({
            type:'del_item',
            value:i
        })
    }
    render(){
        return(
            <div>
                <input type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}<button onClick={(e)=>{this.handledel({index})}}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
